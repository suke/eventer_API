# == Schema Information
#
# Table name: event_schedules
#
#  id         :bigint(8)        not null, primary key
#  event_id   :bigint(8)        not null
#  started_at :datetime         not null
#  ended_at   :datetime         not null
#  address    :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EventScheduleSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :started_at, :ended_at, :venue, :zip_code, :address
  # belongs_to :event
end
