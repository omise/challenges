class CreateCharities < ActiveRecord::Migration[5.2]
  def change
    create_table :charities do |t|
      t.string :name
      t.integer :total
      t.string :currency

      t.timestamps null: false
    end
  end
end
