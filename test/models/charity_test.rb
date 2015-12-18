require 'test_helper'

class CharityTest < ActiveSupport::TestCase
  test "that we can credit a charity some money" do
    charity = charities(:children)
    charity.credit_amount(10000)

    assert_equal 10000, charity.total
  end

  # FIXME There's a race condition in the credit_amount method
  test "that a charity total balance is correct even if credited from two different ruby objects" do
    charity = charities(:children)

    charity_a = Charity.find(charity.id)
    charity_b = Charity.find(charity.id)

    refute_equal charity_a.object_id, charity_b.object_id

    charity_a.credit_amount(10000)
    charity_b.credit_amount(10000)

    assert_equal 20000, charity.reload.total
  end
end
