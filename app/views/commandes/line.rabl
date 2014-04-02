object @commandeLine

attributes :quantity

child :repas do |r|
  attributes :id, :nom, :prix, :description
end

node :subtotal do |cl|
  cl.subtotal
end
