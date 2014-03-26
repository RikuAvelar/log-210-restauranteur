class CreateClients < ActiveRecord::Migration
  def change
    create_table(:clients) do |t|

      t.string :name
      t.datetime :birth_date
      t.string :telephone

      ## Not required (in User)
      #t.timestamps
    end
  end
end
