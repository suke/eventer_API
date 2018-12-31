require 'rails_helper'

describe V1::Companies do
  describe 'GET /api/v1/companies' do
    subject { get '/api/v1/companies' }
    it 'returns success' do
      subject
      expect(response).to be_successful
    end
  end

  describe 'POST /api/v1/companies' do
    subject { post '/api/v1/companies', params: { name: 'コミケット' } }
    it 'returns success' do
      subject
      expect(response).to be_successful
    end
    context 'params empty' do
      subject { post '/api/v1/companies', params: {} }
      it 'return 400' do
        subject
        expect(response.status).to eq(400)
      end
    end
  end

  describe 'PUT /api/v1/companies/:id' do
    let(:company) { create(:company) }
    subject { put "/api/v1/companies/#{company[:id]}", params: { name: 'クリエイション' } }
    it 'return success' do
      subject
      expect(JSON.parse(response.body)['name']).to eq 'クリエイション'
    end
  end

  describe 'DELETE /api/v1/companies/:id' do
    let(:company) { create(:company) }
    subject { delete "/api/v1/companies/#{company[:id]}" }
    it 'return success' do
      subject
      expect(JSON.parse(response.body)['id']).to eq company[:id]
    end
  end
end
