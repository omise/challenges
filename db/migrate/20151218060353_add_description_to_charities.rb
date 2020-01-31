class AddDescriptionToCharities < ActiveRecord::Migration[5.2]
  def change
    add_column :charities, :description, :text, default: ""
  end
end
