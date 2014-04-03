object @menu

attributes :nom, :description, :id

child :repas do |rep|
  extends 'repas/index.rabl'
end

node :restaurant_name do |m|
  m.restaurant.name
end

node :restaurant_id do |m|
  m.restaurant.id
end
