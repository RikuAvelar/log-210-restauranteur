class SetupController < ApplicationController
  def init
    #return bad_request_response unless params[:key] == 'setupConfigKey' or User.where({account_type: 'Entrepreneur'}).first
    # user = User.new({email: 'restaurateur@ent.com', password: '12345678', password_confirmation: '12345678'})
    # user.account = Restaurateur.new({name: 'Mr. Moneybucks'})
    # user.save()
    render json: user
  end
end
