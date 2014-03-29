class CommandeClient < ActiveRecord::Base
	has_one :commande
	has_one :client
end
