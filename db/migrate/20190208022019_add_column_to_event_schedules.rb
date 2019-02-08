class AddColumnToEventSchedules < ActiveRecord::Migration[5.1]
  def change
    add_column :event_schedules, :venue, :string
    add_column :event_schedules, :zip_code, :string
  end
end
