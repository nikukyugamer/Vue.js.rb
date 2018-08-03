Rails.application.routes.draw do
  resources :groups do
    resources :articles
  end
  resources :users
  resources :sessions, only: :create
  resource :profile, only: :update
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
