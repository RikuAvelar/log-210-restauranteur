class CreateRestaurateurs < ActiveRecord::Migration
  def change
    create_table(:restaurateurs) do |t|
      t.string :name

      ## Not required (in User)
      #t.timestamps
    end

  end
end
