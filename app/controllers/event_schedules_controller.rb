class EventSchedulesController < ApplicationController
  def index
    @event_schedules = EventSchedule.all.includes(:event)
    render json: @event_schedules, each_serializer: EventScheduleSerializer
  end

  def show
    @event_schedule = EventSchedule.find_by!(id: params[:id])
    render json: @event_schedule, serializer: EventScheduleSerializer
  end

  def create
    @event_schedule = EventSchedule.create!(event_schedule_params)
    render json: @event_schedule
  end

  def update
    @event_schedule = EventSchedule.find_by!(id: params[:id])
    @event_schedule.update!(event_schedule_params)
    render json: @event_schedule
  end

  def destroy
    @event_schedule = EventSchedule.find_by!(id: params[:id])
    @event_schedule.destroy!
    render json: success_message('id', params[:id])
  end

  private
    def event_schedule_params
      params.require(:event_schedule).permit(:event_id, :started_at, :ended_at, :address)
    end
end
