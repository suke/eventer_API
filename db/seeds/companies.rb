require 'csv'

CSV.foreach('db/csv/companies.csv', headers: true) do |row|
  Company.find_or_create_by(name: row['name'])
end