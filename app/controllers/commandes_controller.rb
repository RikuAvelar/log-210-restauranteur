class CommandesController < ApplicationController

  before_filter :except => [:index, :show] do |c|
    :require_auth!('Restaurateur')
  end

	def create
	 # RDCU - CU05 : Demarrer création de commande
    commande = Commande.new()
    client = User.find({id: params[:userId], type: 'Client'}).first.account;

    return :bad_request_response unless client

    if not repas_params.empty
      has_at_least_one_line = false
      repas_params.each do |rep|
        line = CommandeLine.new()
        repas = Repas.find_by_id(rep.id)
        if repas
          line.repas = repas
          commande.commandeLines.push(lines)
          has_at_least_one_line = true
        end
      end
      return :bad_request_response unless has_at_least_one_line
    else
      return :bad_request_response
    end

    livraison = Livraison.new(params[:deliveryDate])
    commande.livraison = livraison

     # Response

    if commande.save
      render :json => commande, :status => :created
    else
      render :json => commande.errors, :status => :unprocessable_entity
    end
  end

  def update
    commande = Commande.find_by_id(params[:id])
    commande.state = params[:state]

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

	def restaurant_params
    if params.has_key?(:restaurant)
      params.require(:user).require(:restaurant, :quantite)
    else
      return []
    end
  end

  def repas_params
    params.permit(:repas => [:repasId, :quantity])
  end

  def commandeClient_params
    params.permit(:commandeID, :clientID)
  end

end




