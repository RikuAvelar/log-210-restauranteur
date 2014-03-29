class Commande < ActiveRecord::Base
  belongs_to :livraison
  has_many :repas
end
