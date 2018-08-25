FactoryBot.define do
  factory :event do
    sequence(:id) { |n| n }
    sequence(:name) { |n| "Event#{n}" }
    sequence(:company_id) { |n| n }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
