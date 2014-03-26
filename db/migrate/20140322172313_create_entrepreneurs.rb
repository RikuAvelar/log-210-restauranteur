class CreateEntrepreneurs < ActiveRecord::Migration
  def change
    create_table(:entrepreneurs) do |t|
      t.string :name

      ## Not Required (in User)
      #t.timestamps
    end
  end
end
