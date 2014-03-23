class Client < ActiveRecord::Base
  belongs_to :user, :as => :account

  has_many :addresses, :as => :located
end
