class WebsiteController < ApplicationController
  def index
    @token = nil
  end

  def donate
    proceeded = DonateService.new(params).donate
    proceeded ? success_donate : failure_donate
  end

  private

  def success_donate
    flash.notice = t(".success")
    redirect_to root_path
  end

  def failure_donate
    @token = TokenService.new(params[:omise_token]).retrieve_token
    flash.now.alert = t(".failure")
    render :index
  end
end
