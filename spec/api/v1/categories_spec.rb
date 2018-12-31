require 'rails_helper'

describe V1::Categories do
  describe 'GET /api/v1/categories' do
    subject { get '/api/v1/categories' }
    it 'returns success' do
      subject
      expect(response).to be_successful
    end
  end

  describe 'POST /api/v1/categories' do
    subject { post '/api/v1/categories', params: { name: 'アイカツ' } }
    it 'returns success' do
      subject
      expect(response).to be_successful
    end
    context 'params empty' do
      subject { post '/api/v1/categories', params: {} }
      it 'return 400' do
        subject
        expect(response.status).to eq(400)
      end
    end
  end

  describe 'PUT /api/v1/categories/:id' do
    let(:category) { create(:category) }
    subject { put "/api/v1/categories/#{category[:id]}", params: { name: 'test' } }
    it 'return success' do
      subject
      expect(JSON.parse(response.body)['name']).to eq 'test'
    end
  end

  describe 'DELETE /api/v1/categories/:id' do
    let(:category) { create(:category) }
    subject { delete "/api/v1/categories/#{category[:id]}" }
    it 'return success' do
      subject
      expect(JSON.parse(response.body)['id']).to eq category[:id]
    end
  end
end
