class DonationService
  attr_reader :charity, :amount, :omise_token, :charge

  def initialize(charity, amount_in_thb, omise_token)
    @charity = charity
    @amount = amount_in_thb.to_f * 100
    @omise_token = omise_token
  end

  def make
    @charge = begin
      Omise::Charge.create({
        amount: amount,
        currency: "THB",
        card: omise_token,
        description: "Donation to #{charity.name} [#{charity.id}]",
      })
    rescue Omise::Error => e
      OpenStruct.new({
        amount: amount,
        paid: false,
        error: e.message
      })
    end
  end

  def successful?
    @charge.paid
  end
end
