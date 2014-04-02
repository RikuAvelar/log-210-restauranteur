class Livraison < ActiveRecord::Base
  belongs_to :livreur, class_name: 'User', foreign_key: 'user_id'
  belongs_to :commande
  belongs_to :address

  def delivered?
    self.delivered_date != null and commande.status == 'complete'
  end
end
