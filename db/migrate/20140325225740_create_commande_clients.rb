class CreateCommandeClients < ActiveRecord::Migration
  def change
    create_table :commande_clients do |t|
      t.integer :clientID
      t.integer :commandeID
      t.timestamps
    end
  end
end
