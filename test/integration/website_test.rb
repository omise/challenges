require "test_helper"

class WebsiteTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get "/"

    assert_response :success
  end

  test "that someone can't donate to no charity" do
    post(donate_path, params: {
           amount: "100", omise_token: "tokn_X", charity: ""
         })

    assert_template :index
    assert_equal t("website.donate.failure.charity_not_found"), flash.now[:alert]
  end

  test "that someone can't donate 0 to a charity" do
    charity = charities(:children)
    post(donate_path, params: {
           amount: "0", omise_token: "tokn_X", charity: charity.id
         })

    assert_template :index
    assert_equal t("website.donate.failure.amount"), flash.now[:alert]
  end

  test "that someone can't donate less than 20 to a charity" do
    charity = charities(:children)
    post(donate_path, params: {
           amount: "19", omise_token: "tokn_X", charity: charity.id
         })

    assert_template :index
    assert_equal t("website.donate.failure.amount"), flash.now[:alert]
  end

  test "that someone can't donate without a token" do
    charity = charities(:children)
    post(donate_path, params: {
           amount: "100", charity: charity.id
         })

    assert_template :index
    assert_equal t("website.donate.failure.general"), flash.now[:alert]
  end

  test "that someone can donate to a charity" do
    charity = charities(:children)
    initial_total = charity.total
    amount = 100.0
    expected_total = initial_total + amount * 100

    post(donate_path, params: {
           amount: amount, omise_token: "tokn_X", charity: charity.id
         })
    follow_redirect!

    assert_template :index
    assert_equal t("website.donate.success", { amount: amount * 100, charity_name: charity.name }), flash[:notice]
    assert_equal expected_total, charity.reload.total
  end

  test "that if the charge fail from omise side it shows an error" do
    charity = charities(:children)

    # 999 is used to set paid as false
    post(donate_path, params: {
           amount: "999", omise_token: "tokn_X", charity: charity.id
         })

    assert_template :index
    assert_equal t("website.donate.failure.general"), flash.now[:alert]
  end

  test "that we can donate to a charity at random" do
    post(donate_path, params: {
           amount: "100", omise_token: "tokn_X", charity: 'donate_any'
         })
    follow_redirect!

    assert_template :index
    assert_equal true, flash[:notice].include?("Success, you've donated")
  end

  test 'that someone can donate amount with subparts to a charity' do
    charity = charities(:children)
    initial_total = charity.total
    amount = 100.5445
    expected_total = initial_total + amount * 100

    post(donate_path, params: {
           amount: amount, omise_token: "tokn_X", charity: charity.id
         })
    follow_redirect!

    assert_template :index
    assert_equal t("website.donate.success", { amount: amount * 100, charity_name: charity.name }), flash[:notice]
    assert_equal expected_total, charity.reload.total
  end
end
