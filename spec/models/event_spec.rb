# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  name       :string(255)      not null
#  company_id :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  site_url   :string(255)
#

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
