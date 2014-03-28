require 'test_helper'

class MenuControllerTest < ActionController::TestCase
  test "should get nom:string" do
    get :nom:string
    assert_response :success
  end

end
