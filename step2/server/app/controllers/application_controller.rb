class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  before_action :authenticate

  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      return true if token == 'guest'

      @current_user = User.find_by(access_token: token)

      @current_user.present?
    end
  end
end
