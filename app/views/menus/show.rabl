object @menu

attributes :nom, :description

child :repas do |rep|
  extends 'repas/index.rabl'
end

node :restaurant do |m|
  m.restaurant.name
end
