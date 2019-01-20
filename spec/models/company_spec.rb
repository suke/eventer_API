# == Schema Information
#
# Table name: companies
#
#  id         :bigint(8)        not null, primary key
#  name       :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Company, type: :model do
  let(:company) { build(:company) }

  describe 'validate' do

    it 'should be valid' do
      expect(company).to be_valid
    end

    it 'name should be present' do
      company.name = ''
      expect(company).not_to be_valid
    end

    it 'name should not be too long' do
      company.name = 'a' * 256
      expect(company).not_to be_valid
    end
  end
end
