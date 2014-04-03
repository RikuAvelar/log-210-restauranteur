class LivraisonsController < ApplicationController
  def show
    @livraison = Livraison.find_by_id(params[:id])
  end

  def index
    @livraisons = Livraison.joins(:commande).where({commandes: {status: ['ready', 'delivering']}})
  end

  def update
    livraison = Livraison.find_by_id(params[:id])
    commande = livraison.commande

    commande.status = params[:status]

    if params[:status] == 'delivering'
      livraison.delivered_date = Time.now
    end

    if livraison.save
      @livraison = livraison
      render 'livraisons/show'
    else
      render :json => livraison.errors, :status => :unprocessable_entity
    end
  end
end
