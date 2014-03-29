class CreateCommandes < ActiveRecord::Migration
  def change
    create_table :commandes do |t|
      t.string :statut
      t.belongs_to :livraison
      t.integer :quantite
      t.timestamps
    end
  end
end
