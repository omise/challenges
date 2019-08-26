class WebsiteController < ApplicationController
  before_action :check_omise_token, :load_charity, :validate_amount, :make_donation, only: :donate

  def index
    @token = nil
  end

  def donate
    if @charity.credit_amount(@donation.charge.amount)
      flash.notice = t(".success")
      redirect_to root_path
    else
      render_failure
    end
  end

  private

  def retrieve_token(token)
    if Rails.env.test?
      OpenStruct.new({
        id: "tokn_X",
        card: OpenStruct.new({
          name: "J DOE",
          last_digits: "4242",
          expiration_month: 10,
          expiration_year: 2020,
          security_code_check: false,
        }),
      })
    else
      Omise::Token.retrieve(token)
    end
  end

  def load_charity
    @charity = Charity.find_by(id: params[:charity])
    render_failure unless @charity
  end

  def check_omise_token
    render_failure if params[:omise_token].blank?
  end

  def validate_amount
    render_failure if params[:amount].blank? || params[:amount].to_i <= 20
  end

  def make_donation
    @donation = DonationService.new(@charity, params[:amount], params[:omise_token])
    @donation.make
    render_failure unless @donation.successful?
  end

  def render_failure
    @token = params[:omise_token].presence && retrieve_token(params[:omise_token])
    flash.now.alert = t(".failure")
    render :index
  end
end
