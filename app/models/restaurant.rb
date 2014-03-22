class Restaurant < ActiveRecord::Base
  belongs_to :restaurateur
  has_one :address, :as => :located
end
