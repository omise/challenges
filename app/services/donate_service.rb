class DonateService
    attr_reader :charity, :params

    def initialize(params)
      @charity = Charity.find_by(id: params[:charity]) || randomized_charity
      @params = params
    end

    def donate
      if valid_process?
          if Rails.env.test?
            charge = OpenStruct.new({
              amount: params[:amount].to_i * 100,
              paid: (params[:amount].to_i != 999),
            })
          else
            charge = Omise::Charge.create({
              amount: (params[:amount].to_f * 100).to_i,
              currency: "THB",
              card: params[:omise_token],
              description: "Donation to #{charity.name} [#{charity.id}]",
            })
          end
          if charge.paid
            charity.credit_amount(charge.amount)
            return true
          end
      else
        return false
      end
    end

  private

  def valid_process?
    params[:omise_token].present? && params[:charity].present? &&
        charity.present? && params[:amount].present? && params[:amount].to_f > 20
  end

  def randomized_charity
    Charity.all.sample
  end

end
