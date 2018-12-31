require 'rails_helper'

describe V1::EventSchedules do
  let(:event) { create(:event) }
  describe 'GET /api/v1/event/schedules/:id' do
    subject { get "/api/v1/event/schedules/#{event[:id]}" }
    it 'returns success' do
      subject
      expect(response).to be_successful
    end
  end

  describe 'POST /api/v1/event/schedules' do
    subject { post '/api/v1/event/schedules', params: { event_id: event[:id], started_at: '2018/12/01 00:00:00', ended_at: '2018/12/01 15:00:00' } }
    it 'returns success' do
      subject
      expect(response).to be_successful
    end
    context 'params empty' do
      subject { post '/api/v1/event/schedules', params: {} }
      it 'return 400' do
        subject
        expect(response.status).to eq(400)
      end
    end
  end

  describe 'put /api/v1/event/schedules/:id' do
    let(:schedule) { create(:event_schedule) }
    subject { put "/api/v1/event/schedules/#{schedule[:id]}", params: { event_id: schedule[:event_id], started_at: '2018/12/15 00:00:00', ended_at: '2018/12/15 15:00:00' } }
    it 'returns success' do
      subject
      # Todo more detail
      expect(response).to be_successful
    end
  end

  describe 'DELETE /api/v1/event/schedules/:id' do
    let(:schedule) { create(:event_schedule) }
    subject { delete "/api/v1/event/schedules/#{schedule[:id]}" }
    it 'return success' do
      subject
      expect(JSON.parse(response.body)['id']).to eq schedule[:id]
    end
  end
end
