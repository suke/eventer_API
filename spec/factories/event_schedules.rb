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