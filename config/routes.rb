Restauranteur::Application.routes.draw do


  get "static/index"
  post "setup/init"
  #get "repas/nom:string"
  #get "repas/description:string"
  # get "repas/prix:numeric"
  # devise_for :users, :sessions => {}

  scope 'api/' do
    get 'restaurants/commandes'
    get 'restaurants/:id/commandes', to: 'restaurants#commandes', as: 'restaurant'

    resources :restaurateurs, :clients, :tokens, :menus, :commandes, :livraisons
    resources :restaurants do
      resources :menus
    end


    # devise_scope :user do
    #   post 'sessions' => 'sessions#create', as: :new_user_session
    #   delete 'sessions' => 'sessions#destroy', as: :destroy_user_session
    # end
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
