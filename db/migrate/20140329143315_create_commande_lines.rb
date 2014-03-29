class CreateCommandeLines < ActiveRecord::Migration
  def change
    create_table :commande_lines do |t|

      t.timestamps
    end
  end
end
