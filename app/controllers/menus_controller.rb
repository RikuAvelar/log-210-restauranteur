class MenusController < ApplicationController
  def create

    # RDCU - CU06 - Creer nouveau menu
    menu = Menu.new(menu_params)

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

  private

  def menu_params
    params.permit(:nom)
  end

  def repas_params
    params.permit(:repas => [:nom, :description, :prix])
  end
end
