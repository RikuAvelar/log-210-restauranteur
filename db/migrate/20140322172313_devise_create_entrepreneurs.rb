class DeviseCreateEntrepreneurs < ActiveRecord::Migration
  def change
    create_table(:entrepreneurs) do |t|
      t.string :name

      t.timestamps
    end
  end
end
