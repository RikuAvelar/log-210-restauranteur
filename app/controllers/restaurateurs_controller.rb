class RestaurateursController < ApplicationController
  respond_to :json

  # before_filter do |c|
  #   c.require_auth!()
  # end

  def create

    # RDCU - CU01 : Demarrer Ajout Restaurateur (API)

    @res = User.new(all_user_params)

    # RDCU - CU01 : Entrer Information

    @account = Restaurateur.new(restaurateur_params)
    @res.account = @account

    if not restaurants_params.empty?
      restaurants_params.each do |restoId|
        @resto = Restaurant.find_by_id(restoId)
        if @resto
          @res.account.restaurants.push(@resto)
        end
      end
    end

    # Response

    if @res.save
      @restaurateur = @res
      render 'restaurateurs/show'
    else
      render :json => @res.errors, :status => :unprocessable_entity
    end
  end

  def update
    user = User.find_by_id(params[:id])
    res = user.account

    user.update(user_params)
    res.update(restaurateur_params)

    if not restaurants_params.empty?
      res.restaurants = []
      restaurants_params.each do |restoId|
        resto = Restaurant.find_by_id(restoId)
        if resto
          res.restaurants.push(resto)
        end
      end
    end

    if res.save
      @restaurateur = res
      render 'restaurateurs/show'
    else
      render :json => res.errors, :status => :unprocessable_entity
    end
  end

  def index
    @restaurateurs = Restaurateur.all
  end

  def show
    rest = User.find_by_id(params[:id])
    if rest
      @restaurateur = rest.account
    end
  end

  private

  def user_params
    params.permit(:password, :password_confirmation)
  end

  def all_user_params
    params.permit(:email).merge(user_params)
  end

  def restaurateur_params
    params.require(:user).permit(:name)
  end

  def restaurants_params
    if params.has_key?(:restaurants)
      params.require(:user).require(:restaurants)
    else
      return []
    end
  end
end
