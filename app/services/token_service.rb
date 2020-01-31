class TokenService
    attr_reader :token

    def initialize(token)
      @token = token
    end

    def retrieve_token
      return nil if token.blank?
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
end
