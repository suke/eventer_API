class EventSchedule < ApplicationRecord
  belongs_to :event, optional: true
  validates :event_id, presence: true, length: { maximum: 11 }
  validates :started_at, presence: true
  validates :ended_at, presence: true
  validates :address, length: { maximum: 255 }
  validate :check_start_end

  def check_start_end
    errors.add('Please enter the date of the end date') unless self.started_at < self.ended_at
  end
end
