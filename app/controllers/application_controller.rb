class ApplicationController < ActionController::Base
  # 外部からAPIを叩いた時にcsrfに引っかかる為、一時的に無効にしておく
  protect_from_forgery with: :null_session
  before_action :set_raven_context

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
    "Successfully deleted with #{key} = #{id}"
  end

  private

  def set_raven_context
    Raven.extra_context(params: params.to_unsafe_h, url: request.url)
  end
end
