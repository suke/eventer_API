class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :company_id, :site_url, :created_at, :updated_at
  belongs_to :company
end
