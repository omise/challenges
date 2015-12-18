require 'test_helper'

class AppTest < ActiveSupport::TestCase
  setup do
    @_app = App.new
  end

  test "that we can list all charities" do
    assert @_app.all_charities
  end

  test "that we can build a charity" do
    assert_instance_of Charity, @_app.build_charity
  end

  test "that we just built charity has a total of 0" do
    charity = @_app.build_charity

    assert_equal 0, charity.total
  end

  test "that we can create a charity" do
    charity = @_app.create_charity(name: "Elephant Nature Park")

    assert_instance_of Charity, charity
    assert charity.persisted?
  end

  test "that a newly created charity has a total of 0 THB" do
    charity = @_app.create_charity(name: "Elephant Nature Park")

    assert_equal 0, charity.total
    assert_equal "THB", charity.currency
  end

  test "that even if we try to create a charity with more than 0 THB in the total we will get 0 THB" do
    charity = @_app.create_charity(name: "Elephant Nature Park", total: 1000)

    assert_equal 0, charity.total
    assert_equal "THB", charity.currency
  end

  test "that we cannot create a charity without a name" do
    charity = @_app.create_charity(name: "")

    assert_instance_of Charity, charity
    refute charity.persisted?
  end

  test "that all charities are listed by creation order" do
    charity1 = @_app.create_charity(name: "Anonymous Charity 1")
    charity2 = @_app.create_charity(name: "Anonymous Charity 2")
    charity3 = @_app.create_charity(name: "Anonymous Charity 3")

    refute_equal [charity3, charity2, charity1], @_app.all_charities.last(3)
    assert_equal [charity1, charity2, charity3], @_app.all_charities.last(3)
  end

  test "that we can count all charities" do
    Charity.destroy_all
    3.times { |i| @_app.create_charity(name: "Anonymous Charity #{i}") }

    assert_equal 3, @_app.count_charities
  end

  test "that wen can find a charity by id" do
    charity = charities(:children)
    found_charity = @_app.find_charity(charity.id)

    assert_equal charity.id, found_charity.id
  end
end
