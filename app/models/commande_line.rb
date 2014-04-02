class CommandeLine < ActiveRecord::Base
  belongs_to :commande
  belongs_to :repas

  def prix
    repas.prix
  end

  def subtotal
    repas.prix * self.quantity
  end
end
