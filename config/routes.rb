Rails.application.routes.draw do
  # config/routes.rb
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :events, only: [:index, :show, :create, :update, :destroy]
      resources :vendor_categories, only: [:index, :show, :create, :update, :destroy]
      get "/reservations/:user_id", to: "reservations#index"
      get "/reservations", to: "reservations#all_reservations"
      post "/reservations", to: "reservations#create"
      delete "/reservations/:id", to: "reservations#destroy"
      

      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
end