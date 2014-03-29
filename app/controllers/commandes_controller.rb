class CommandesController < ApplicationController
	def 

	 # RDCU - CU05 : Demarrer création de commande
    @commande = Commande.new()
    @commandeClient = CommandeClient.new(commandeClient_params)

    if not restaurant_params.empty?
        @resto = Restaurant.find_by_id(restaurant_params)
        if @resto
          @commande.restaurant.push(@resto)
        end
    end

    if not repas_params.empty?
        @repas = Repas.find_by_id(repas_params)
        if @repas 
          @commande.repas.push(@repas)
        end
    end

    @livraison = Livraison.new(:dateTime, @commande)

     # Response

    respond_to do |format|
      if @commande.save
        format.json { render json: @commande, status: :created }
        format.xml { render xml: @commande, status: :created }
      else
        format.json { render json: @commande.errors, status: :unprocessable_entity }
        format.xml { render xml: @commande.errors, status: :unprocessable_entity }
      end
    end

    respond_to do |format|
      if @commandeClient.save
        format.json { render json: @commande, status: :created }
        format.xml { render xml: @commande, status: :created }
      else
        format.json { render json: @commande.errors, status: :unprocessable_entity }
        format.xml { render xml: @commande.errors, status: :unprocessable_entity }
      end
    end

    respond_to do |format|
      if @livraison.save
        format.json { render json: @commande, status: :created }
        format.xml { render xml: @commande, status: :created }
      else
        format.json { render json: @commande.errors, status: :unprocessable_entity }
        format.xml { render xml: @commande.errors, status: :unprocessable_entity }
      end
    end
   
  def update
    @restaurateur = User.where({id: params[:id], account_type: 'Restaurateur'}).first
    return bad_request unless @restaurateur.present?
    @restaurateur.commandeClient.comamande.statut.update(:statut)
   
    respond_to do |format|
      if @restaurateur.save
        format.json { head :no_content, status: :ok }
        format.xml { head :no_content, status: :ok }
      else
        format.json { render json: @client.errors, status: :unprocessable_entity }
        format.xml { render xml: @client.errors, status: :unprocessable_entity }
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
    if params.has_key?(:repas)
      params.require(:user).require(:repas)
    else
      return []
    end
  end

  def commandeClient_params
    params.permit(:commandeID, :clientID)
  end

end 




