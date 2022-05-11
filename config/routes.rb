# config/routes.rb
Rails.application.routes.draw do
  resources :notes
  resources :planets
  resources :users

  # get '/hello', to: 'application#hello_world'

  get '/me', to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end