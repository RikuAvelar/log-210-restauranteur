class Commande < ActiveRecord::Base
  belongs_to :client
  belongs_to :livraison
  has_many :repas, through: :commandeLine
end
