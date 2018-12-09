class EventsController < ApplicationController
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
