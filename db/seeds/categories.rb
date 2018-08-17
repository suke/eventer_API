require 'csv'

CSV.foreach('db/csv/categories.csv', headers: true) do |row|
  Category.create(name: row['name'])
end