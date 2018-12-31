require 'rails_helper'

describe V1::Categories do
  describe 'GET /api/v1/categories' do
    subject { get '/api/v1/categories' }
    it 'returns success' do
      subject
      expect(response).to be_success
    end
  end

  describe 'POST /api/v1/categories' do
    subject { post '/api/v1/categories', params: { name: 'アイカツ' } }
    it 'returns success' do
      subject
      expect(response).to be_success
    end
    context 'params empty' do
      subject { post '/api/v1/categories', params: {} }
      it 'return ' do
        subject
        expect(response.status).to eq(400)
      end
    end
  end
end
