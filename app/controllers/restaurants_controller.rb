class RestaurantsController < ApplicationController
  def create

    # RDCU - CU02 - Demarrer Ajout Restaurant
    @resto = Restaurant.new(:name => params[:name])

    # RDCU - CU02 - Entrer Information
    @address = Address.new(address_params)
    @resto.address = @address

    # RDCU - CU02 - Assigner Restaurateur

    if params[:restaurateur]
      @res = Restaurateur.find(params["restaurateur"])
      @resto.restaurateur = @res
    end

    # Response

    respond_to do |format|
      if @resto.save
        format.json { render json: @resto, status: :created }
        format.xml { render xml: @resto, status: :created }
      else
        format.json { render json: @resto.errors, status: :unprocessable_entity }
        format.xml { render xml: @resto.errors, status: :unprocessable_entity }
      end
    end
  end



  private

  def address_params
    params.require(:address).permit(:street_address, :country, :city, :province)
  end

end
