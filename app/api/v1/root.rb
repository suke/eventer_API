module V1
  class Root < Grape::API
    version 'v1'
    format :json

    mount V1::Categories
    mount V1::Companies
    mount V1::Events
  end
end