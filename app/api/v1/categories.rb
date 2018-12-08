module V1
  class Categories < Grape::API
    resources :categories do
      desc 'Return Categories',
          success: CategorySerializer,
          produces: %w[application/json]
      get serializer: CategorySerializer do
        categories = Category.all

        categories
      end
    end
  end
end