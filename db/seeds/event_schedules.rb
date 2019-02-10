require 'csv'

CSV.foreach('db/csv/event_schedules.csv', headers: true) do |row|
  EventSchedule.find_or_create_by({
    event_id: row['event_id'],
    started_at: row['started_at'],
    ended_at: row['ended_at'],
    address: row['address']
  })
end