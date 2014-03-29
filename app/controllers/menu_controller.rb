class MenuController < ApplicationController
  def create
  
  # RDCU - CU06 - Creer nouveau menu
   @menu = Menu.new(menu_params)
   
   #Automatically generated
   def nom:string
   end
  
   def menu_params
    params.permit(:nom)
   end
   
   respond_to do |format|
      if @menu.save
        format.json { render json: @menu, status: :created }
        format.xml { render xml: @menu, status: :created }
      else
        format.json { render json: @menu.errors, status: :unprocessable_entity }
        format.xml { render xml: @menu.errors, status: :unprocessable_entity }
      end
    end
  end
end
