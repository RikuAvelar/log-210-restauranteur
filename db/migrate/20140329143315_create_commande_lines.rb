class CreateCommandeLines < ActiveRecord::Migration
  def change
    create_table :commande_lines do |t|
      t.belongs_to :repas
      t.belongs_to :commande
      t.integer :quantity
      t.timestamps
    end
  end
end
