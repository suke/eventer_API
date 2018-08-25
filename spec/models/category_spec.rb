require 'rails_helper'

RSpec.describe Category, type: :model do
  let(:category) { build(:category) }

  describe 'validate' do
    it 'should be valid' do
      expect(category).to be_valid
    end

    it 'name should be present' do
      category.name = ''
      expect(category).not_to be_valid
    end

    it 'name should not be too long' do
      category.name = 'a' * 256
      expect(category).not_to be_valid
    end
  end
end
