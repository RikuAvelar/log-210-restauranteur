class CreateCommandes < ActiveRecord::Migration
  def change
    create_table :commandes do |t|
      t.string :status
      t.belongs_to :restaurant
      t.belongs_to :user
      t.timestamps
    end
  end
end
