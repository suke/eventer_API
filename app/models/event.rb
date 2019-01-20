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

class Event < ApplicationRecord
  belongs_to :company, optional: true
  has_many :event_schedules
  has_many :event_categories
  has_many :categories, through: :event_categories

  validates :name, presence: true,
                   uniqueness: true,
                   length: { maximum: 255 }
  validates :company_id, presence: true,
                         length: { maximum: 11 }
end
