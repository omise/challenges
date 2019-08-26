class WebsiteController < ApplicationController
  before_action :check_omise_token, :load_charity, :validate_amount, :make_donation, only: :donate

  def index
    @token = nil
  end

  def donate
    if @charity.credit_amount(@donation.charge.amount)
      flash.notice = t(".success", { amount: @donation.charge.amount, charity_name: @charity.name })
      redirect_to root_path
    else
      render_failure(t(".failure.general"))
    end
  end

  private

  def retrieve_token(token)
    Omise::Token.retrieve(token) rescue nil
  end

  def load_charity
    @charity = if params[:charity].eql?('donate_any')
      Charity.all.sample
    else
      Charity.find_by(id: params[:charity])
    end

    render_failure(t(".failure.charity_not_found")) unless @charity
  end

  def check_omise_token
    render_failure(t(".failure.general")) if params[:omise_token].blank?
  end

  def validate_amount
    render_failure(t(".failure.amount")) if params[:amount].blank? || params[:amount].to_i <= 20
  end

  def make_donation
    @donation = DonationService.new(@charity, params[:amount], params[:omise_token])
    @donation.make
    render_failure(t(".failure.general")) unless @donation.successful?
  end

  def render_failure(alert_msg)
    @token = params[:omise_token].presence && retrieve_token(params[:omise_token])
    flash.now.alert = alert_msg
    render :index
  end
end
