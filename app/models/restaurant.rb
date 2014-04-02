class Restaurant < ActiveRecord::Base
  belongs_to :restaurateur
  has_one :address, :as => :located
  has_many :menus
  has_many :commandes
end
