object @restaurant

attributes :name, :id

node :restaurateurId do |resto|
  if resto.restaurateur
    resto.restaurateur.user.id
  end
end

node :restaurateurName do |resto|
  if resto.restaurateur
    resto.restaurateur.name
  end
end

child :address do |resto|
  extends 'addresses/show'
end
