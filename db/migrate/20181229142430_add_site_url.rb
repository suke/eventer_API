class AddSiteUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :site_url, :string
  end
end
