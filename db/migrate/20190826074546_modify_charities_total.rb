class ModifyCharitiesTotal < ActiveRecord::Migration[5.2]
  def up
    change_column :charities, :total, :decimal
  end

  def down
    change_column :charities, :total, :integer
  end
end
