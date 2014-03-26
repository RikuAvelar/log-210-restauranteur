# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Restauranteur::Application.config.secret_key_base = ENV['SECRET_TOKEN'] || 'a29ea3b52695403135d1f69173429f21834da5b5183855200c20de79b124723c8a74de226452894d062d5510db68b67d8e188752aa6896b8ffc66410b7c2571c'
