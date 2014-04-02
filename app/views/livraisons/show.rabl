object @livraison

attributes :id, :scheduled_date, :delivered_date

child :commande do
  extends 'commandes/show'
end

child :address do
  extends 'addresses/show'
end

node :livreur do |liv|
  partial 'livreurs/show', :object => liv.livreur
end

# node :delivered do |liv|
#   liv.delivered?
# end
