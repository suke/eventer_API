require 'rails_helper'

describe V1::Events do
  describe 'GET /api/v1/events' do
    subject { get '/api/v1/events' }
    it 'returns success' do
      subject
      expect(response).to be_successful
    end
  end

  describe 'POST /api/v1/events' do
    let(:company) { create(:company) }
    let(:category) { create(:category) }
    subject { post '/api/v1/events',
      params: { name: 'コミックマーケット', company_id: company.id, categories: [category.id] }
    }
    it 'returns success' do
      subject
      expect(response).to be_successful
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
    let(:category) { create(:category) }
    subject { put "/api/v1/events/#{event[:id]}", params: { name: 'test', categories: [category.id] } }
    it 'return success' do
      subject
      res = JSON.parse(response.body)
      expect(res['name']).to eq 'test'
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
