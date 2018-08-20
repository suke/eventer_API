Rails.application.routes.draw do
  root 'admin#top'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :events
  resources :companies
  resources :categories
  resources :event_schedules
end
