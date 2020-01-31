class ChangeCharitesTotalToFloat < ActiveRecord::Migration[5.2]
  def up
    change_column :charities, :total, :float, :default => 0
  end

  def down
    change_column :charities, :total, :integer, :default => 0
  end
end
