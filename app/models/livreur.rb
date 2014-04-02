class Livreur < ActiveRecord::Base
  has_one :user, :as => :account

  has_many :livraisons
end
