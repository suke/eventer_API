require 'csv'

CSV.foreach('db/csv/events.csv', headers: true) do |row|
  p row['company_id']
  Event.create!({name: row['name'], company_id: row['company_id']})
end