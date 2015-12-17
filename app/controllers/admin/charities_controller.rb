class Admin::CharitiesController < ApplicationController
  before_action :authenticate_user!

  def index
    @charities = @app.all_charities
  end
end
