object @restaurant

attributes :name

node :restaurateurId do |resto|
  if resto.restaurateur
    resto.restaurateur.user.id
  end
end

child :address do |resto|
  extends 'addresses/show'
end
