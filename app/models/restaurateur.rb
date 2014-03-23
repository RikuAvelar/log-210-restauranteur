class Restaurateur < ActiveRecord::Base
  belongs_to :user, :as => :account
  has_many :restaurants
end
