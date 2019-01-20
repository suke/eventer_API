module V1
  class Root < Grape::API
    version 'v1'
    format :json
    formatter :json, Grape::Formatter::ActiveModelSerializers
    # error_formatter :json, Grape::Formatter::ActiveModelSerializers

    mount V1::Categories
    mount V1::Companies
    mount V1::Events
    mount V1::EventSchedules
  end
end
