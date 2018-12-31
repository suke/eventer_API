require 'rails_helper'

describe V1::Events do
  describe 'GET /api/v1/events' do
    subject { get '/api/v1/events' }
    it 'returns success' do
      subject
      expect(response).to be_success
    end
  end

  describe 'POST /api/v1/events' do
    let(:company) { create(:company) }
    subject { post '/api/v1/events', params: { name: 'コミックマーケット', company_id: company[:id] } }
    it 'returns success' do
      subject
      expect(response).to be_success
    end
    context 'params empty' do
      subject { post '/api/v1/events', params: {} }
      it 'return 400' do
        subject
        expect(response.status).to eq(400)
      end
    end
  end

  describe 'PUT /api/v1/events/:id' do
    let(:event) { create(:event) }
    subject { put "/api/v1/events/#{event[:id]}", params: { name: 'test' } }
    it 'return success' do
      subject
      expect(JSON.parse(response.body)['name']).to eq 'test'
    end
  end

  describe 'DELETE /api/v1/events/:id' do
    let(:event) { create(:event) }
    subject { delete "/api/v1/events/#{event[:id]}" }
    it 'return success' do
      subject
      expect(JSON.parse(response.body)['id']).to eq event[:id]
    end
  end
end
