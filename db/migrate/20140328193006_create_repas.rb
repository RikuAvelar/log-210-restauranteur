class CreateRepas < ActiveRecord::Migration
  def change
    create_table :repas do |t|
      t.string :nom
      t.decimal :prix
      t.text :description
      t.belongs_to :menu
      t.timestamps
    end
  end
end
