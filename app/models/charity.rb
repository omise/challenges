class Charity < ActiveRecord::Base
  validates :name, presence: true

  def credit_amount(amount)
    update_column :total, self.total + amount
  end
end
