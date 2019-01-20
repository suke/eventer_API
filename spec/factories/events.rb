# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  name       :string(255)      not null
#  company_id :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  site_url   :string(255)
#

FactoryBot.define do
  factory :event do
    sequence(:id) { |n| n }
    sequence(:name) { |n| "Event#{n}" }
    sequence(:company_id) { create(:company).id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
