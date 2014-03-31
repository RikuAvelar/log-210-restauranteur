object @menu

attributes :nom, :description, :id

child :repas do |rep|
  extends 'repas/index.rabl'
end

node :restaurantName do |m|
  m.restaurant.name
end

node :restaurantId do |m|
  m.restaurant.id
end
