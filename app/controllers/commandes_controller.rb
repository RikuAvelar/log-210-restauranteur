class CommandesController < ApplicationController

  before_filter :except => [:index, :show] do |c|
    #c.require_auth!('Restaurateur')
  end

  def index
    @commandes = Commande.all()
  end

  def show
    @commande = Commande.find_by_id(params[:id])
    render 'commandes/showAll'
  end

	def create
	 # RDCU - CU05 : Demarrer création de commande
    commande = Commande.new()
    client = User.where({id: params[:user_id], account_type: 'Client'}).first;
    restaurant = Restaurant.find_by_id(params[:restaurant_id])

    return :bad_request_response unless client and restaurant

    commande.client = client
    commande.restaurant = restaurant

    if not repas_params.empty?
      has_at_least_one_line = false
      repas_params[:repas].each do |rep|
        line = CommandeLine.new()
        repas = Repas.find_by_id(rep[:repas_id])
        if repas
          line.repas = repas
          line.quantity = rep[:quantity]
          commande.commandeLines.push(line)
          has_at_least_one_line = true
        end
      end
      return :bad_request_response unless has_at_least_one_line
    else
      return :bad_request_response
    end

    livraison = Livraison.new()
    livraison.scheduled_date = params[:scheduled_date]
    commande.livraison = livraison

     # Response

    if commande.save
      render :json => commande, :status => :created
    else
      render :json => commande.errors, :status => :unprocessable_entity
    end
  end

  def update
    if params[:status] == 'complete'
      return :bad_request_response
    end
    commande = Commande.find_by_id(params[:id])
    commande.status = params[:state]

    if params[:status] == 'complete'
      commande.livraison.delivered_date = Time.now
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

	def commande_params
    params.permit(:user_id, :restaurant_id)
  end

  def repas_params
    params.permit(:repas => [:repas_id, :quantity])
  end

  def commandeClient_params
    params.permit(:commandeID, :clientID)
  end

end




