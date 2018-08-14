class Event < ApplicationRecord
  validates :name, presence: true, length: { maximum: 255 }
  validates :operation_company_id, length: { maximum: 11}
end
