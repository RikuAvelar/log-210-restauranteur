class ClientsController < ApplicationController
  respond_to :json
  #before_filter :require_auth!

  def create
    # RDCU - CU03 : Demarrer Creation de Compte
    @client = User.new(all_user_params)

    # RDCU - CU03 : Entrer Information
    @account = Client.new(client_params)
    @client.account = @account
    update_addresses @client

    # Response

    if @client.save
      render json: @client,  status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end

    return;

  end

  def update
    client = User.where({id: params[:id], account_type: 'Client'}).first
    return bad_request_response unless client.present?
    client_update = client.account.update(update_client_params)
    user_update = client.update(user_params)
    addr_update = update_addresses client
    if client.save
      @client = client.account
      render "clients/show"
    else
      render :json => @client.errors, status: :unprocessable_entity
    end
  end

  def show
    client = User.find_by_id(params[:id])
    if client
      @client = client.account
    end
  end

  def index
    @clients = Client.all
  end

  private

  def update_addresses(client)
    all_address_params.each do |addrParam|
      if not addrParam[:id]
        client.account.save
        client.account.addresses.create(single_address_params addrParam)
      else
        addr = Address.where({id: addrParam[:id], located_type: 'Client'}).first
        if not addr
          client.account.addresses.create(single_address_params addrParam)
        elsif addrParam.has_key? :destroy && addrParam[:destroy]
          addr.destroy
        else
          addr.update(single_address_params addrParam)
          addr.save
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
      params.require(:user).permit(:addresses => [:id, :street_address, :city, :country, :province, :code_postal, :is_default])[:addresses]
    else
      return []
    end
  end

  def single_address_params(address)
    puts address
    address.permit(:id, :street_address, :city, :country, :province, :code_postal, :is_default)
  end
end
