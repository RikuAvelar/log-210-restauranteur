class ClientsController < ApplicationController
  def create
    # RDCU - CU03 : Demarrer Creation de Compte
    @client = Client.new(user_params_for_create)

    # RDCU - CU03 : Entrer Information
    all_address_params.each do |addrParam|
      @client.addresses.new(single_address_params addrParam)
    end

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
    @client = Client.find_by_id(params[:id])
    respond_to do |format|
      if @client.update_attributes(user_params_for_update)
        format.json { head :no_content, status: :ok }
        format.xml { head :no_content, status: :ok }
      else
        format.json { render json: @client.errors, status: :unprocessable_entity }
        format.xml { render xml: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def user_params_for_create
    params.require(:user).permit(:name, :password, :email, :birth_date, :telephone)
  end

  def user_params_for_update
    params.require(:user).permit(:password, :telephone)
  end

  def all_address_params
    params.require(:user).require(:addresses)
  end

  def single_address_params(address)
    @is_default = address.has_key? :is_default && address[:is_default]
    return [:street_address => :street_address, :city => :city, :country => :country, :province => :province, :is_default => @is_default]
  end
end
