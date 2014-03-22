class RestaurateursController < ApplicationController
  respond_to :json
  def create

    # RDCU - CU01 : Demarrer Ajout Restaurateur (API)

    @res = Restaurateur.new(:name => params[:name], :email => params[:email], :password => params[:password])

    # RDCU - CU01 : Entrer Information

    if not restaurants_params.empty?
      restaurants_params.each do |restoId|
        @resto = Restaurant.find_by_id(restoId)
        if @resto
          @res.restaurants.push(@resto)
        end
      end
    end

    # Response

    respond_to do |format|
      if @res.save
        format.json { render json: @res, status: :created }
        format.xml { render xml: @res, status: :created }
      else
        format.json { render json: @res.errors, status: :unprocessable_entity }
        format.xml { render xml: @res.errors, status: :unprocessable_entity }
      end
    end
  end

  def show

  end

  private

  def address_params
    params.require(:address).permit(:street_address, :country, :city, :province)
  end

  def restaurants_params
    if params.has_key?(:restaurants)
      params.require(:restaurants)
    else
      return []
    end
  end
end
