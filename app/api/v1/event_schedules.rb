module V1
  class EventSchedules < Grape::API
    helpers V1::Helpers::Message
    resources :event do
      resources :schedules do
        desc 'create event schedule',
            success: EventScheduleSerializer,
            produces: %w[application/json]
        params do
          requires :event_id, Integer
          requires :name, type: String
          requires :started_at, type: Date
          requires :ended_at, type: Date
          optional :address, type: String
        end
        post serializer: EventScheduleSerializer do
          declared_params = declared(params, include_missing: false)
          event_schedule = EventSchedule.create!(declared_params)
          event_schedule
        end

        resource ':id' do
          desc 'update event schedule',
            success: EventScheduleSerializer,
            produces: %w[application/json]
          params do
            requires :event_id, Integer
            requires :name, type: String
            requires :started_at, type: Date
            requires :ended_at, type: Date
            optional :address, type: String
          end
          put serializer: EventScheduleSerializer do
            declared_params = declared(params, include_missing: false)
            event_schedule = EventSchedule.find_by!(id: declared_params[:id])
            event_schedule.update!(declared_params)
            event_schedule
          end
          
          desc 'delete event schedule'
          delete do
            id = params[:id].to_i
            event_schedule = EventSchedule.find_by!(id: id)
            event_schedule.destroy!
            {id: id, message: success_delete_message('id', id)}
          end
        end
      end
    end
  end
end