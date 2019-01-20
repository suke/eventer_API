# == Schema Information
#
# Table name: event_categories
#
#  id          :bigint(8)        not null, primary key
#  event_id    :integer
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class EventCategory < ApplicationRecord
  belongs_to :event
  belongs_to :category
end
