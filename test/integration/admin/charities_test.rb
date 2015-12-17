require 'test_helper'

class Admin::CharitiesTest < ActionDispatch::IntegrationTest
  test "that an unauthenticated user cannot reach the list of charities" do
    get admin_charities_path

    assert_redirected_to new_user_session_path
  end

  test "that an authenticated user can reach the list of charities" do
    sign_in_user(users(:john).email, "helloworld")
    get admin_charities_path

    assert_response :success
  end
end
