Rails.application.routes.draw do
  root 'welcome#index'

  # before was get "/about/about"
  # url is now /about rather than /about/about
  # also this changes the route to just "about" rather than "about_about"
  get "/about", to: "about#about", as: "about"

  get 'welcome/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


end
 

