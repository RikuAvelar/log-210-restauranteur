require 'test_helper'

class RepasControllerTest < ActionController::TestCase
  test "should get nom:string" do
    get :nom:string
    assert_response :success
  end

  test "should get description:string" do
    get :description:string
    assert_response :success
  end

  test "should get prix:numeric" do
    get :prix:numeric
    assert_response :success
  end

end
