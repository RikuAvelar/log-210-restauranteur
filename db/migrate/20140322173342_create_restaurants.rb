class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.belongs_to :restaurateur
      t.timestamps
    end
  end
end
