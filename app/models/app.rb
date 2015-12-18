class App
  def all_charities
    Charity.order(:created_at).all
  end

  def build_charity(attributes = {})
    # NOTE currency is for now fixed to THB.
    Charity.new(attributes.merge(total: 0, currency: "THB"))
  end

  def create_charity(attributes)
    charity = build_charity(attributes)
    charity.save
    charity
  end

  def count_charities
    Charity.count
  end

  def find_charity(id)
    Charity.find_by(id: id)
  end
end
