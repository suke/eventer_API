require 'csv'

CSV.foreach('db/csv/events.csv', headers: true) do |row|
  Event.find_or_create_by({name: row['name'], company_id: row['company_id']})
end