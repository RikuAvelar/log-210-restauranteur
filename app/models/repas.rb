class Repas < ActiveRecord::Base
	 belongs_to :menu
   has_many :commandes, through: :commandeLine
end
