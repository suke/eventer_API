class ApplicationController < ActionController::Base
  # 外部からAPIを叩いた時にcsrfに引っかかる為、一時的に無効にしておく
  protect_from_forgery with: :null_session
end
