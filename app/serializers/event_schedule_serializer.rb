class EventScheduleSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :started_at, :ended_at, :address
  # belongs_to :event
end
