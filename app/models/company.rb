class Company < ApplicationRecord
  has_many :companies
  validates :name, presence: true, length: { maximum: 255 }
end
