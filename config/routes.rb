Rails.application.routes.draw do
  get 'thankyou', to: 'thank_you#index'
  root to: 'visitors#index'
  get 'products/:id', to: 'products#show', :as => :products
  devise_for :users
  resources :users
end
