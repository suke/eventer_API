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

FactoryBot.define do
  factory :event_schedule do
    sequence(:id) { |n| n }
    sequence(:event_id) { |n| n }
    started_at { Time.zone.now }
    ended_at { Time.zone.now + 6.hours }
    address { '' }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
