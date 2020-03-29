class CreateBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :benches do |t|
      t.string :description
      t.float :lat
      t.float :lng
      t.integer :seating, defaults: 2, null: false
      t.string :picture_url

      t.timestamps
    end
  end
end
