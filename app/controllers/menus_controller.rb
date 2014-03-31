class MenusController < ApplicationController
  def create

    # RDCU - CU06 - Creer nouveau menu
    menu = Menu.new(menu_params)
    restaurant = Restaurant.find_by_id(params[:restaurant_id])

    return bad_request_response unless restaurant

    menu.restaurant = restaurant

    puts repas_params
    repas_params[:repas].each do |r|
      repas = Repas.new(r)
      menu.repas.push(repas)
    end

    if menu.save
      render :json => menu, :status => :created
    else
      render :json => menu.errors, :status => :unprocessable_entity
    end
  end

  def show
    if params.has_key? :restaurant_id
      @menu = Menu.where({id: params[:id], restaurant_id: params[:restaurant_id]}).first
    else
      @menu = Menu.find_by_id(params[:id])
    end
  end

  def index
    if params[:filter_by]
      restaurants = User.where({id: params[:filter_by][:restaurateur], account_type: 'Restaurateur'}).first.account.restaurants
      @menus = restaurants.collect { |r| r.menus }.flatten
    elsif params.has_key? :restaurant_id
      restaurant = Restaurant.find_by_id(params[:restaurant_id])
      if restaurant
        @menus = restaurant.menus
      else
        @menus = []
      end
    else
      @menus = Menu.all
    end
  end

  private

  def filter_params
    params.permit(:filter_by)
  end

  def menu_params
    params.permit(:nom)
  end

  def repas_params
    params.permit(:repas => [:nom, :description, :prix])
  end
end
