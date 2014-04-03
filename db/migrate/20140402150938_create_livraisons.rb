class CreateLivraisons < ActiveRecord::Migration
  def change
    create_table :livraisons do |t|
      t.datetime :scheduled_date
      t.datetime :delivered_date
      t.belongs_to :livreur
      t.belongs_to :commande
      t.belongs_to :address

      t.timestamps
    end
  end
end
