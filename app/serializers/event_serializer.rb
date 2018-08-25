class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :company_id
  belongs_to :company
end
