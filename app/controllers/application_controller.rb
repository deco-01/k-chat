class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :basic_auth
  before_action :configure_permitted_parameters, if: :devise_controller?


  def after_sign_out_path_for(rexource_or_scope)
    new_user_session_path
  end

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      username == 'hogehoge' && password == '111111'
    end
  end
end
