require 'csv'

CSV.foreach('db/csv/categories.csv', headers: true) do |row|
  Category.find_or_create_by(name: row['name'])
end
