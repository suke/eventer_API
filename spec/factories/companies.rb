FactoryBot.define do
  factory :company do
    sequence(:id) { |n| n }
    sequence(:name) { |n| "Company#{n}" }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
