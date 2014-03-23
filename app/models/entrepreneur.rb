class Entrepreneur < ActiveRecord::Base
  belongs_to :user, :as => :account
end
