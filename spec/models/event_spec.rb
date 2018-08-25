require 'rails_helper'

RSpec.describe Event, type: :model do
  let(:event) { build(:event) }

  describe 'validate' do
    it 'should be valid' do
      expect(event).to be_valid
    end

    it 'name should be present' do
      event.name = ''
      expect(event).not_to be_valid
    end

    it 'name should not be too long' do
      event.name = 'a' * 256
      expect(event).not_to be_valid
    end

    it 'company_id should be present' do
      event.company_id = ''
      expect(event).not_to be_valid
    end
  end
end
