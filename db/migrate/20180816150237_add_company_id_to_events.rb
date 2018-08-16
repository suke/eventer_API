class AddCompanyIdToEvents < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :events, :companies, column: :id
  end
end
