class EventsController < ApplicationController
  def create
    event = Event.new(event_params)
    if event.save
      # do something
      render json: event
    else
      # do something
      render json: event.errors.messages
    end
  end

  def show

  end

  def update

  end

  def destroy

  end

  private
    def event_params
      params.require(:event).permit(:name)
    end
end
