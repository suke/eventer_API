require 'rails_helper'

RSpec.describe EventSchedule, type: :model do
  let(:event_schedule) { build(:event_schedule) }

  describe 'validate' do
    it 'should be valid' do
      expect(event_schedule).to be_valid
    end

    it 'event_id should be present' do
      event_schedule.event_id = ''
      expect(event_schedule).not_to be_valid
    end

    it 'started_at should be present' do
      event_schedule.started_at = ''
      expect(event_schedule).not_to be_valid
    end

    it 'ended_at should be present' do
      event_schedule.ended_at = ''
      expect(event_schedule).not_to be_valid
    end

    it 'address should not be too long' do
      event_schedule.address = 'a' * 256
      expect(event_schedule).not_to be_valid
    end
  end
end
