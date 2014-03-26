class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    #build_resource
    # resource = User.find_for_database_authentication(:email => params[:email])
    # return invalid_login_attempt unless resource && password_confirmed

    # if resource.valid_password?(params[:password])
    #   resource.ensure_authentication_token!
    #   respond_to do |format|
    #     format.json { render json: { :authentication_token => resource.authentication_token, :user_id => resource.id }, :status => :created }
    #     format.xml { render xml: { :authentication_token => resource.authentication_token, :user_id => resource.id }, :status => :created }
    #   end
    # else
    #   respond_to do |format|
    #     format.json { render json: { :errors => ["Invalid email or password."] },  :success => false, :status => :unauthorized}
    #     format.xml { render xml: { :errors => ["Invalid email or password."] },  :success => false, :status => :unauthorized}
    #   end
    # end

    # if resource.valid_password?(params[:password])
    #   resource.ensure_authentication_token!  #make sure the user has a token generated
    #   respond_to do |format|
    #     format.json { render json: { :authentication_token => resource.authentication_token, :user_id => resource.id }, :status => :created }
    #     format.xml { render xml: { :authentication_token => resource.authentication_token, :user_id => resource.id }, :status => :created }
    #   end
    #   # respond_to :json => { :authentication_token => resource.authentication_token, :user_id => resource.id }, :status => :created
    # else
    #   return invalid_login_attempt
    # end
  end

  def destroy
    # # expire auth token
    # @user = User.where(:authentication_token=>params[:auth_token]).first
    # @user.reset_authentication_token!
    # render :json => { :message => ["Session deleted."] },  :success => true, :status => :ok
  end

  private

  def password_confirmed
    params[:password] == params[:password_confirmation]
  end

  def invalid_login_attempt
    warden.custom_failure!
    respond_to do |format|
      format.json { render json: { :errors => ["Invalid email or password."] },  :success => false, :status => :unauthorized}
      format.xml { render xml: { :errors => ["Invalid email or password."] },  :success => false, :status => :unauthorized}
    end
    # render :json => { :errors => ["Invalid email or password."] },  :success => false, :status => :unauthorized
  end
end
