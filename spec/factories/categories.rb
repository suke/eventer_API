FactoryBot.define do
  factory :category do
    sequence(:id) { |n| n }
    sequence(:name) { |n| "Category#{n}" }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
