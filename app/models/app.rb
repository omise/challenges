class App
  def all_charities
    Charity.order(:created_at).all
  end

  def build_charity(attributes = {})
    Charity.new(attributes.merge(total: 0))
  end

  def create_charity(attributes)
    charity = build_charity(attributes)
    charity.save
    charity
  end

  def count_charities
    Charity.count
  end
end
