require 'csv'

CSV.foreach('db/csv/events.csv', headers: true) do |row|
  Event.create!({name: row['name'], company_id: row['company_id']})
end