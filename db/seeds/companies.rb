require 'csv'

CSV.foreach('db/csv/companies.csv', headers: true) do |row|
  Company.create(name: row['name'])
end