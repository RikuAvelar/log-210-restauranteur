class DeviseCreateClients < ActiveRecord::Migration
  def change
    create_table(:clients) do |t|

      t.string :name
      t.datetime :birth_date
      t.string :telephone

      t.timestamps
    end
  end
end
