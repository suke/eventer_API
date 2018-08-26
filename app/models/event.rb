class Event < ApplicationRecord
  belongs_to :company, optional: true
  has_many :event_schedules
  validates :name, presence: true,
                   uniqueness: true
                   length: { maximum: 255 }
  validates :company_id, presence: true,
                         length: { maximum: 11 }
end
