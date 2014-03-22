class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :street_address
      t.string :country
      t.string :province
      t.string :city
      t.boolean :is_default

      t.references :located, polymorphic: true

      t.timestamps
    end
  end
end
