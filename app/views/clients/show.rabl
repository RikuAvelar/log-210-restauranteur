object @client

attributes :name, :telephone

node :email do |c|
  c.user.email
end

child :addresses do |c|
  extends 'addresses/index'
end
