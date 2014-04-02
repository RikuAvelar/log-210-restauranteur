object @client

node :email do |c|
  c.user.email
end

node :user do |c|
	attributes :name, :telephone
	partial 'clients/info', :object => c
end

node :id do |c|
	c.user.id
end
