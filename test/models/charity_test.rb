require 'test_helper'

class CharityTest < ActiveSupport::TestCase
  self.use_transactional_tests = false

  test "that we can credit a charity some money" do
    charity = charities(:children)
    charity.credit_amount(10000)

    assert_equal 10000, charity.total
  end

  # FIXME There's a race condition in the credit_amount method
  test "that a charity total balance is correct even if credited from two different ruby objects" do

    charity   = charities(:children)
    conns     = ActiveRecord::Base.connection.pool.size - 1

    threads   = Array.new(conns) do |i|
      ActiveRecord::Base.connection_pool.with_connection do
        Thread.new do
          charity.credit_amount(1000)
        end
      end
    end

    threads.each(&:join)

    assert_equal conns * 1000, charity.reload.total
  end
end
