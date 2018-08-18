class AddEventIdToEventSchedules < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :event_schedules, :events, column: :event_id
  end
end
