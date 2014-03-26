object @restaurateurs

extends 'restaurateurs/show'

node :id do |rest|
  rest.user.id
end
