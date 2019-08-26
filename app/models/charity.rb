class Charity < ActiveRecord::Base
  validates :name, presence: true

  def credit_amount(amount)
    lock!
    new_total = total + amount
    update_attribute :total, new_total
  end
end
