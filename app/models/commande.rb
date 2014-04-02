class Commande < ActiveRecord::Base
  belongs_to :client, :class_name => 'User', :foreign_key => 'user_id' # We could make it belong to Client, but they have different IDs, so we change the names a bit
  belongs_to :restaurant

  has_one :livraison
  has_many :commandeLines
  has_many :repas, through: :commandeLine

  def states
    ['ordered', 'in prep', 'ready', 'delivering', 'complete']
  end
end
