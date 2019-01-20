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
        optional :site_url, type: String
        optional :categories, type: Array
      end
      post serializer: EventSerializer do
        declared_params = declared(params, include_missing: false)
        categories = declared_params.delete(:categories)
        Event.transaction do
          @event = Event.new(declared_params)
          if categories.present?
            categories.each do |category|
              @event.event_categories.build( { event_id: @event.id, category_id: category } )
            end
          end
        end

        @event.save!
        @event
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
          optional :site_url, type: String
          optional :categories, type: Array
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

      resources :schedules do
        resource ':id' do
          desc 'get event schedule',
            success: EventScheduleSerializer,
            produces: %w[application/json]
          get serializer: EventScheduleSerializer do
            event_schedule = EventSchedule.where(event_id: params[:id])
            event_schedule
          end
        end
      end
    end
  end
end
