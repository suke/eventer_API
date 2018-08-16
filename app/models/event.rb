class Event < ApplicationRecord
  belongs_to :company
  validates :name, presence: true, length: { maximum: 255 }
  validates :company_id, length: { maximum: 11 }
end
