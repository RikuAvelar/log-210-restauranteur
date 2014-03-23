class Client < ActiveRecord::Base
  ## Not actually valid, since polymorphism in Rails works the other way around.
  ## However, the line below is left here as to show the intentions
  # belongs_to :user, :as => :account
  has_one :user, :as => :account

  has_many :addresses, :as => :located
end
