class Company < ApplicationRecord
  has_many :events
  validates :name, presence: true, length: { maximum: 255 }
end
