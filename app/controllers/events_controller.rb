class EventsController < ApplicationController

  def index
    events = Event.all.includes(:company)
    render json: events
  end

  def show
    event = Event.find_by!(id: params[:id])
    render json: event
  end

  def create
    event = Event.create!(event_params)
    render json: event
  end

  def update
    event = Event.find_by!(id: params[:id])
    event.update!(event_params)
    render json: event
  end

  def destroy
    id = params[:id].to_i
    event = Event.find_by!(id: id)
    event.destroy!
    render json: {id: id, message: success_message('id', id)}
  end

  private
    def event_params
      params.require(:event).permit(:name, :company_id)
    end
end
