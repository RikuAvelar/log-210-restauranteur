class DeviseCreateRestaurateurs < ActiveRecord::Migration
  def change
    create_table(:restaurateurs) do |t|
      t.string :name
      t.timestamps
    end

  end
end
