class ClientsController < ApplicationController
  respond_to :json
  before_filter :require_auth!

  def create
    # RDCU - CU03 : Demarrer Creation de Compte
    @client = User.new(all_user_params)

    # RDCU - CU03 : Entrer Information
    @account = Client.new(client_params)
    @client.account = @account
    update_addresses @client

    # Response

    respond_to do |format|
      if @client.save
        format.json { render json: @client, status: :created }
        format.xml { render xml: @client, status: :created }
      else
        format.json { render json: @client.errors, status: :unprocessable_entity }
        format.xml { render xml: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @client = User.where({id: params[:id], account_type: 'Client'}).first
    return bad_request unless @client.present?
    @client_update = @client.account.update(update_client_params)
    @user_update = @client.update(user_params)
    @addr_update = update_addresses @client
    respond_to do |format|
      if @client.save
        format.json { head :no_content, status: :ok }
        format.xml { head :no_content, status: :ok }
      else
        format.json { render json: @client.errors, status: :unprocessable_entity }
        format.xml { render xml: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def bad_request
    respond_to do |format|
      format.json { render json: { :errors => ["Bad Request"] },  :success => false, :status => :bad_request}
      format.xml { render xml: { :errors => ["Bad Request"] },  :success => false, :status => :bad_request}
    end
  end

  def update_addresses(client)
    all_address_params.each do |addrParam|
      if not addrParam.has_key? :id
        client.account.addresses.new(single_address_params addrParam)
      else
        @addr = Address.find(located_id: client.id, located_type: 'Client', id: addrParam[:id])
        if not @addr
          client.account.new(single_address_params addrParam)
        elsif addrParam.has_key? :destroy && addrParam[:destroy]
          @addr.destroy
        else
          @addr.update(single_address_params addrParam)
        end
      end
    end
  end

  def user_params
    params.permit(:password, :password_confirmation)
  end

  def all_user_params
    params.permit(:email).merge(user_params)
  end

  def client_params
    params.require(:user).permit(:name, :birth_date, :telephone)
  end

  def update_user_params
    params.permit(:password, :password_confirmation)
  end

  def update_client_params
    if params.has_key? :user
      params.require(:user).permit(:telephone)
    else
      return []
    end
  end

  def all_address_params
    if params.has_key? :user
      params.require(:user).permit(:addresses => [:street_address, :city, :country, :province, :is_default])[:addresses]
    else
      return []
    end
  end

  def single_address_params(address)
    @is_default = address.has_key? :is_default && address[:is_default]
    return [:street_address => :street_address, :city => :city, :country => :country, :province => :province, :is_default => @is_default]
  end
end
