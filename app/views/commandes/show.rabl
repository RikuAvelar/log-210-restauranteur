object @commande

attributes :status, :id, :livreur_id

child :client do |client|
  extends 'clients/show', :object => client.account
end

node :lines do |c|
  partial 'commandes/line', :object => c.commandeLines
end

node :subtotal do |c|
  c.commandeLines.collect{ |cl| cl.subtotal }.sum
end
