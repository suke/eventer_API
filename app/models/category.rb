# == Schema Information
#
# Table name: categories
#
#  id         :bigint(8)        not null, primary key
#  name       :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  validates :name, presence: true,
                   uniqueness: true,
                   length: { maximum: 255 }
  has_many :event_categories
  has_many :events, through: :event_categories
end
