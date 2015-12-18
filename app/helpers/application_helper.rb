module ApplicationHelper
  def m(amount, currency)
    Money.new(amount, currency).format
  end
end
