class EventSchedulesController < ApplicationController
  def index
    return render 'admin/top'
  end

  def show
    return render 'admin/top'
  end

  def create
    return render 'admin/top'
  end

  def edit
    return render 'admin/top'
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

  def schedules
    @event_schedule = EventSchedule.where(event_id: params[:id])
    render json: @event_schedule, each_serializer: EventScheduleSerializer
  end

  private
    def event_schedule_params
      params.require(:event_schedule).permit(:event_id, :started_at, :ended_at, :address)
    end
end
