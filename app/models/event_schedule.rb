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

class EventSchedule < ApplicationRecord
  belongs_to :event, optional: true
  validates :event_id, presence: true, length: { maximum: 11 }
  validates :started_at, presence: true
  validates :ended_at, presence: true
  validates :address, length: { maximum: 255 }
end
