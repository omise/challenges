class Charity < ActiveRecord::Base
  validates :name, presence: true

  def credit_amount(amount)
    self.with_lock do
      update_column :total, total + amount
    end
  end
end
