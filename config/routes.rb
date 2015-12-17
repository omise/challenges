Rails.application.routes.draw do

  devise_for :users

  namespace :admin do
    resources :charities
  end

  root to: "website#index"

end
