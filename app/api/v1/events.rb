module V1
  class Events < Grape::API
    helpers V1::Helpers::Message
    resources :events do
      desc 'return events',
          success: EventSerializer,
          produces: %w[application/json]
      get serializer: EventSerializer do
        events = Event.all
        events
      end

      desc 'create Event',
          success: EventSerializer,
          produces: %w[application/json]
      params do
        requires :name, type: String
        optional :company_id, type: Integer
      end
      post serializer: EventSerializer do
        declared_params = declared(params, include_missing: false)
        event = Event.create!(declared_params)
        event
      end

      resource ':id' do
        desc 'get Event',
          success: EventSerializer,
          produces: %w[application/json]
        params do
          requires :id, type: Integer
        end
        get serializer: EventSerializer do
          declared_params = declared(params, include_missing: false)
          event = Event.find_by!(id: declared_params[:id])
          event
        end

        desc 'update Event',
          success: EventSerializer,
          produces: %w[application/json]
        params do
          requires :id, type: Integer
          requires :name, type: String
          optional :company_id, type: Integer
        end
        put serializer: EventSerializer do
          declared_params = declared(params, include_missing: false)
          event = Event.find_by!(id: declared_params[:id])
          event.update!(declared_params)
          event
        end

        desc 'delete Event'
        delete do
          id = params[:id].to_i
          event = Event.find_by!(id: id)
          event.destroy!
          {id: id, message: success_delete_message('id', id)}
        end
      end
    end
  end
end