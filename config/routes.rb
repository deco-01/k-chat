Rails.application.routes.draw do
  devise_for :users
  root to: 'rooms#show'
  resource :user, except: [:new, :create, :destroy]
  get '/room', to: 'rooms#show', as: 'room'
  get '/user', to: 'users#show', as: 'user_profile'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
