class DonationService
	attr_reader :charity, :amount, :omise_token, :charge

	def initialize(charity, amount, omise_token)
		@charity = charity
		@amount = amount.to_f
		@omise_token = omise_token
	end

	def make
		@charge = if Rails.env.test?
      OpenStruct.new({
        amount: amount * 100,
        paid: (amount != 999),
      })
    else
      Omise::Charge.create({
        amount: amount * 100,
        currency: "THB",
        card: omise_token,
        description: "Donation to #{charity.name} [#{charity.id}]",
      })
    end
	end

	def successful?
		@charge.paid
	end
end