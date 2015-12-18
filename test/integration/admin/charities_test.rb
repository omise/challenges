require 'test_helper'

class Admin::CharitiesTest < ActionDispatch::IntegrationTest
  setup do
    @_app = App.new
  end

  test "that an unauthenticated user cannot reach the list of charities" do
    get admin_charities_path

    assert_redirected_to new_user_session_path
  end

  test "that an authenticated user can reach the list of charities" do
    sign_in_user(users(:john).email, "helloworld")
    get admin_charities_path

    assert_response :success
  end

  test "that an authenticated user can reach the new charity form" do
    sign_in_user(users(:john).email, "helloworld")
    get admin_charities_path
    assert_follow_link new_admin_charity_path

    assert_response :success
    assert_select "input[name='charity[name]']"
    assert_select "input[type='submit']"
  end

  test "that an authenticated user can create a new charity" do
    sign_in_user(users(:john).email, "helloworld")
    get new_admin_charity_path

    assert_difference "@_app.count_charities" do
      post_via_redirect(admin_charities_path, charity: {
        name: "Elephant Nature Park",
        description: "A charity that helps elephants go back to the wild.",
      })
    end

    charity = @_app.all_charities.last

    assert_equal t("admin.charities.create.success"), flash.notice
    assert_equal "Elephant Nature Park", charity.name
    assert_equal "A charity that helps elephants go back to the wild.", charity.description
  end

  test "that an authenticated user cannot create a new charity without a name" do
    sign_in_user(users(:john).email, "helloworld")
    get new_admin_charity_path

    assert_no_difference "@_app.count_charities" do
      post_via_redirect admin_charities_path, charity: { name: "" }
    end

    assert_equal t("admin.charities.create.failure"), flash.alert
  end

  test "that an authenticated user cannot create a new charity and set the total amount" do
    sign_in_user(users(:john).email, "helloworld")
    get new_admin_charity_path

    assert_difference "@_app.count_charities" do
      post_via_redirect admin_charities_path, charity: { name: "Elephant Nature Park", total: 1000 }
    end

    assert_equal t("admin.charities.create.success"), flash.notice
    assert_equal "Elephant Nature Park", @_app.all_charities.last.name
    assert_equal 0, @_app.all_charities.last.total
  end
end
