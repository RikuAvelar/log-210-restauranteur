class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.string :nom

      t.timestamps
    end
  end
end
