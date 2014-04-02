class CreateLivreurs < ActiveRecord::Migration
  def change
    create_table :livreurs do |t|
      t.string :name

      t.timestamps
    end
  end
end
