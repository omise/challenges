require 'test_helper'

class WebsiteTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get "/"

    assert_response :success
  end

  test "that someone can't donate to no charity" do
    post donate_path, amount: "100", omise_token: "tokn_X", charity: ""

    assert_template :index
    assert_equal t("website.donate.failure"), flash.now[:alert]
  end

  test "that someone can't donate 0 to a charity" do
    charity = charities(:children)
    post donate_path, amount: "0", omise_token: "tokn_X", charity: charity.id

    assert_template :index
    assert_equal t("website.donate.failure"), flash.now[:alert]
  end

  test "that someone can't donate less than 20 to a charity" do
    charity = charities(:children)
    post donate_path, amount: "19", omise_token: "tokn_X", charity: charity.id

    assert_template :index
    assert_equal t("website.donate.failure"), flash.now[:alert]
  end

  test "that someone can't donate without a token" do
    charity = charities(:children)
    post donate_path, amount: "100", charity: charity.id

    assert_template :index
    assert_equal t("website.donate.failure"), flash.now[:alert]
  end

  test "that someone can donate to a charity" do
    charity = charities(:children)
    initial_total = charity.total
    expected_total = initial_total + (100 * 100)

    post_via_redirect donate_path, amount: "100", omise_token: "tokn_X", charity: charity.id

    assert_template :index
    assert_equal t("website.donate.success"), flash[:notice]
    assert_equal expected_total, charity.reload.total
  end

  test "that if the charge fail from omise side it shows an error" do
    charity = charities(:children)

    # 999 is used to set paid as false
    post donate_path, amount: "999", omise_token: "tokn_X", charity: charity.id

    assert_template :index
    assert_equal t("website.donate.failure"), flash.now[:alert]
  end

  test "that we can donate to a charity at random" do
    charities = Charity.all
    initial_total = charities.to_a.sum(&:total)
    expected_total = initial_total + (100 * 100)

    post donate_path, amount: "100", omise_token: "tokn_X", charity: "random"

    assert_template :index
    assert_equal expected_total, charities.to_a.map(&:reload).sum(&:total)
    assert_equal t("website.donate.success"), flash[:notice]
  end
end
