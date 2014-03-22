class RestaurateursController < ApplicationController
  respond_to :json
  def create
    @res = Restaurateur.create(:name => params[:name], :email => params[:email], :password => params[:password])

    @address = Address.create(address_params)
    @res.address = @address

    if not restaurants_params.empty?
      restaurants_params.each do |restoId|
        @resto = Restaurant.find_by_id(resto)
        if @resto
          @res.restaurants.push(@resto)
        end
      end
    end

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
    if params.key(:restaurants)
      params.require(:restaurants)
    else
      return []
    end
  end
end
