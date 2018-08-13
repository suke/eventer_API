class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :events, :name, unique: true
  end
end
