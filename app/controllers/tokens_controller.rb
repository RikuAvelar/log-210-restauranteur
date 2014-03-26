class TokensController < ApplicationController
  respond_to :json
  skip_before_filter :authenticate_user!

  def create
    # Creates a new token
    return bad_confirm unless password_confirmed
    user = User.find_by_email(user_params[:email])
    if user.valid_password?(user_params[:password])
      token = user.generate_auth_token
      login_success token, user
    else
      return wrong_login
    end
  end

  def index
    # # Validates an existing token
    # # DEPRECATED TESTING CODE
    # ts = ENV['SECRET_TOKEN'] || 'SECRET'
    # # login_success JWT.decode(request.headers[:Authorization], ts), current_user
    # respond_to do |format|
    #   format.json { render json: { :token => JWT.decode(request.headers[:Authorization], ts) },  :success => true}
    #   format.xml { render xml: { :token => JWT.decode(request.headers[:Authorization], ts) },  :success => true}
    # end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end

  def login_success(token, user)
    respond_to do |format|
      format.json { render json: { :token => token, :user => {:id => user.id, :type => user.account_type} },  :success => true}
      format.xml { render xml: { :token => token, :user => {:id => user.id, :type => user.account_type} },  :success => true}
    end
  end

  def password_confirmed
    params[:password] == params[:password_confirmation]
  end

  def bad_confirm
    respond_to do |format|
      format.json { render json: { :errors => ["Passwords did not match"] },  :success => false, :status => :unauthorized}
      format.xml { render xml: { :errors => ["Passwords did not match"] },  :success => false, :status => :unauthorized}
    end
  end

  def wrong_login
    respond_to do |format|
      format.json { render json: { :errors => ["Invalid email or password."] },  :success => false, :status => :unauthorized}
      format.xml { render xml: { :errors => ["Invalid email or password."] },  :success => false, :status => :unauthorized}
    end
  end
end
