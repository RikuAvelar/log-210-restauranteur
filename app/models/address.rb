class Address < ActiveRecord::Base
  belongs_to :located, :polymorphic => true
end
