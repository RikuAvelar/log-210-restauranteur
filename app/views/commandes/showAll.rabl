object @commande

extends 'commandes/show'

node :address do |c|
    partial 'addresses/show', :object => c.livraison.address
end
