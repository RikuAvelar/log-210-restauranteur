object @restaurateur

attributes :name

node :email do |rest|
  rest.user.email
end

child :restaurants do |rest|
  extends 'restaurants/index'
end
