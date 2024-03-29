class RestaurantsController < ApplicationController
  def commandes
    if params[:id]
      @restaurants = Restaurant.joins(:commandes).uniq.where({id: params[:id]}).first
    else
      @restaurants = Restaurant.joins(:commandes).uniq.where({restaurateur_id: params[:restaurateur_id]})
    end
  end

  def create

    # RDCU - CU02 - Demarrer Ajout Restaurant
    resto = Restaurant.new(restaurant_params)

    # RDCU - CU02 - Entrer Information
    address = Address.new(address_params)
    resto.address = address

    # RDCU - CU02 - Assigner Restaurateur

    if params[:restaurateur_id]
      res = User.find_by_id(params[:restaurateur_id]).account
      resto.restaurateur = res
    end

    # Response

    if resto.save
      @restaurant = resto;
      render 'restaurants/show'
    else
      render :json => resto.errors, :status => :unprocessable_entity
    end
  end

  def update
    resto = Restaurant.find_by_id(params[:id])
    return unless resto
    if params[:address]
      resto.address.update_attributes(address_params)
    end
    if params[:restaurateur_id]
      res = User.find(params[:restaurateur_id]).account
      if res
        resto.restaurateur = res
      end
    end

    resto.update_attributes(restaurant_params)

    if resto.save
      @restaurant = resto
      render 'restaurants/show'
    else
      render :json => resto.errors, :status => :unprocessable_entity
    end
  end

  def show
    @restaurant = Restaurant.find_by_id(params[:id])
  end

  def index
    @restaurants = Restaurant.all
  end

  private

  def restaurant_params
    params.permit(:name)
  end

  def address_params
    params.require(:address).permit(:street_address, :code_postal, :country, :city, :province)
  end

end
