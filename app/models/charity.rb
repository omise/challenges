class Charity < ActiveRecord::Base
  validates :name, presence: true
end
