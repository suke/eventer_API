class ApplicationController < ActionController::Base
  # 外部からAPIを叩いた時にcsrfに引っかかる為、一時的に無効にしておく
  protect_from_forgery with: :null_session

  rescue_from ActiveRecord::RecordNotFound do
    render json: { error: 'Record not found' }, status: 404
  end

  rescue_from ActiveRecord::RecordInvalid do |e|
    render json: { error: e.to_s }, status: 422
  end

  rescue_from ActiveRecord::RecordNotDestroyed do
    render json: { error: 'Failed to destroy' }, status: 422
  end

  protected

  def success_message(key, id)
    {success: "Successfully deleted with #{key} = #{id}"}
  end
end
