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

    respond_to do |format|
      if commande.save
        format.json { head :no_content, status: :ok }
        format.xml { head :no_content, status: :ok }
      else
        format.json { render json: client.errors, status: :unprocessable_entity }
        format.xml { render xml: client.errors, status: :unprocessable_entity }
      end
    end
  end
end
