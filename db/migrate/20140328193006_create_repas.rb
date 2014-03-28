class CreateRepas < ActiveRecord::Migration
  def change
    create_table :repas do |t|

      t.timestamps
    end
  end
end
