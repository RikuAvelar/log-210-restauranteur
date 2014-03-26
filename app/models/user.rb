class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #has_one :account, :foreign_key => :account_id, :class_name => :account_type
  belongs_to :account, polymorphic: true

  def is_account_type?(account_type)
    self.account_type == account_type
  end

  def generate_auth_token
    token_secret = ENV['SECRET_TOKEN'] || 'SECRET'
    JWT.encode({id: self.id, email: self.email, type: self.account_type, issued: Time.now, expires: Time.now.in(2 * 60 * 60)}, token_secret)
  end
end
