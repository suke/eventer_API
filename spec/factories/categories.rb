# == Schema Information
#
# Table name: categories
#
#  id         :bigint(8)        not null, primary key
#  name       :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryBot.define do
  factory :category do
    sequence(:id) { |n| n }
    sequence(:name) { |n| "Category#{n}" }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
