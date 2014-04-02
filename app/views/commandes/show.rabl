object @commande

attributes :status, :id, :livreur_id

child :client do |client|
  extends 'clients/show', :object => client.account
end

node :repas do |c|
  partial 'commandes/line', :object => c.commandeLines
end

node :subtotal do |c|
  c.commandeLines.collect{ |cl| cl.subtotal }.sum
end

node :delivery_date do |c|
  c.livraison.scheduled_date
end

node :address do |c|
  partial 'addresses/show', :object => c.livraison.address
end
