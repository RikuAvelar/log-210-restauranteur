attributes :name, :telephone, :birth_date
child :addresses do 
	 extends "addresses/index"
end