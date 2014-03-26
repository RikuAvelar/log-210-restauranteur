class TokensController < ApplicationController
  respond_to :json
  skip_before_filter :authenticate_user!

  def create
    # Creates a new token
    # return bad_confirm unless password_confirmed # Why would we need a password confirmation? It's a login
    user = User.find_by_email(user_params[:email])
    if user && user.valid_password?(user_params[:password])
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
    render :json => { :token => token, :user => {:id => user.id, :type => user.account_type} },  :success => true
  end

  def password_confirmed
    params[:password] == params[:password_confirmation]
  end

  def bad_confirm
    render :json => { :errors => [{:message => "Passwords did not match", :type => 'PasswordConfirmationError'}] },  :success => false, :status => :unauthorized
  end

  def wrong_login
    render :json => { :errors => [{:type => 'AuthFailedError', :message => "Invalid email or password"}] }, :success => false, :status => :unauthorized
  end
end
