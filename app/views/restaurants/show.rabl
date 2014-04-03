object @restaurant

attributes :name, :id, :description

node :restaurateur_id do |resto|
  if resto.restaurateur
    resto.restaurateur.user.id
  end
end

node :restaurateur_name do |resto|
  if resto.restaurateur
    resto.restaurateur.name
  end
end

child :address do |resto|
  extends 'addresses/show'
end
