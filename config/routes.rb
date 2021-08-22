Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/users/login", to: "users#login"
  post "/users", to: "users#create"
  get "/users/verify", to: "users#verify"
  resources :projects
  resources :skills
  resources :contacts
end
