Rails.application.routes.draw do
  root to: "static_page#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :index, :show, :update, :destroy]
    resources :albums, only: [:create, :index, :show, :update, :destroy]
    resources :comments, only: [:create, :index, :show, :update, :destroy]
    resources :tags, only: [:create, :index, :show, :update, :destroy]
  end
  
end