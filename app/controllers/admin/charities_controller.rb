class Admin::CharitiesController < ApplicationController
  before_action :authenticate_user!

  def index
    @charities = @app.all_charities
  end

  def new
    @charity = @app.build_charity
  end

  def create
    @charity = @app.create_charity(charity_params)

    if @charity.persisted?
      flash.notice = t(".success")
      redirect_to admin_charities_path
    else
      flash.alert = t(".failure")
      render :new
    end
  end

  private

  def charity_params
    params.require(:charity).permit(:name, :description)
  end
end
