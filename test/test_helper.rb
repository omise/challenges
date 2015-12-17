ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  private

  def sign_in_user(email, password)
    get new_user_session_path
    post_via_redirect user_session_path, user: {
      email: email,
      password: password
    }
  end
end
