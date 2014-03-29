class CommandeLine < ActiveRecord::Base
  has_one :command
  has_one :repas

  def prix
    repas.prix
  end

  def subtotal
    repas.prix * self.quantity
  end
end
