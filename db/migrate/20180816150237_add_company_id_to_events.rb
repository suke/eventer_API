class AddCompanyIdToEvents < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :events, :companies, column: :company_id
  end
end
