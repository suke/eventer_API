module V1
  class Categories < Grape::API
    helpers V1::Helpers::Message
    resources :categories do
      desc 'return categories',
          success: CategorySerializer,
          produces: %w[application/json]
      get serializer: CategorySerializer do
        categories = Category.all
        categories
      end


      desc 'create category',
          success: CategorySerializer,
          produces: %w[application/json]
      params do
        requires :name, type: String
      end
      post serializer: CategorySerializer do
        declared_params = declared(params, include_missing: false)
        category = Category.create!(declared_params)
        category
      end

      resource ':id' do
        desc 'update category',
          success: CategorySerializer,
          produces: %w[application/json]
        params do
          requires :id, type: Integer
          requires :name, type: String
        end
        put serializer: CategorySerializer do
          declared_params = declared(params, include_missing: false)
          category = Category.find_by!(id: declared_params[:id])
          category.update!(declared_params)
          category
        end
        
        desc 'delete category'
        delete do
          id = params[:id].to_i
          category = Category.find_by!(id: id)
          category.destroy!
          {id: id, message: success_delete_message('id', id)}
        end
      end
    end
  end
end