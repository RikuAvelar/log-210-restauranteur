class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  before_filter :set_up_user_vars
  before_filter :authenticate_user_from_token!

  #before_filter :authenticate_user!

  # Allow CORS (Cross Origin Resource Sharing) to communicate between Grunt and Rails (for dev)
  before_filter :cors_set_access_control_headers
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'# need to be changed once it goes to production 'http://localhost:8080'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = '*, X-Requested-With, X-Prototype-Version, X-CSRF-Token, Content-Type'
    headers['Access-Control-Max-Age'] = "1728000"
  end

  def set_up_user_vars
    @current_user = nil
    @user_token = nil
    @invalid_token = false
  end

  def authenticate_user_from_token!
    token_secret = ENV['SECRET_TOKEN'] || 'SECRET'
    user_auth_token = request.headers[:Authorization].presence
    begin
      user_token = user_auth_token && JWT.decode(user_auth_token.to_s, token_secret)
    rescue
      JWT::DecodeError
      @invalid_token = true
    end
    # If there is no token, proceed as normal
    if user_token
      return expired_token_response if is_token_expired? user_token
      user = User.find_by_id(user_token['id']) # ID can't be correlated to a symbol
      if user
        sign_in :user, user, store: false
        @current_user = user
      else
        @invalid_token = true
      end
    end
  end

  def is_token_expired?(user_token)
    Time.parse(user_token['expires']) < Time.now
  end

  def require_auth!(account_type = 'all')
    return unauthorized_response unless is_logged_in
    if not account_type =='all'
      return forbidden_response unless current_user.is_account_type? account_type
    end
  end

  def expired_token_response
    render :json => { :errors => [{:type => "ExpiredTokenError", :message => "Token has expired"}] },  :success => false, :status => :bad_request
  end

  def unauthorized_response
    json_response = { :errors => [{:type => "UnauthorizedError", :message => "This resource requires authentication"}] }
    if @invalid_token
      json_response[:errors].push({:type => "InvalidToken", :message => "This token is not a valid token"})
    end
    render :json => json_response, :success => false, :status => :unauthorized
  end

  def forbidden_response
    render :json => { :errors => [{:type => "ForbiddenError", :message => "You are not authorized to view perform this action."}] },  :success => false, :status => :forbidden
  end

  def bad_request_response
    render :json => { :errors => [{:type => "BadRequestError", :message => "We could not process your request. Please make sure you have all the necessary data and try again"}] },  :success => false, :status => :bad_request
  end

  def current_user
    if @current_user
      @current_user
    end
  end

  def is_logged_in
    return @current_user != nil
  end
end
