class CreateEventSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :event_schedules do |t|
      t.integer :event_id, null: false
      t.datetime :started_at, null: false
      t.datetime :ended_at, null: false
      t.string :address
      t.timestamps
    end
  end
end