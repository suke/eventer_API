module V1
  class Companies < Grape::API
    helpers V1::Helpers::Message
    resources :companies do
      desc 'return companies',
          success: CompanySerializer,
          produces: %w[application/json]
      get serializer: CompanySerializer do
        companies = Company.all
        companies
      end


      desc 'create company',
          success: CompanySerializer,
          produces: %w[application/json]
      params do
        requires :name, type: String
      end
      post serializer: CompanySerializer do
        declared_params = declared(params, include_missing: false)
        company = Company.create!(declared_params)
        company
      end

      resource ':id' do
        desc 'update company',
          success: CompanySerializer,
          produces: %w[application/json]
        params do
          requires :id, type: Integer
          requires :name, type: String
        end
        put serializer: CompanySerializer do
          declared_params = declared(params, include_missing: false)
          company = Company.find_by!(id: declared_params[:id])
          company.update!(declared_params)
          company
        end
        
        desc 'delete company'
        delete do
          id = params[:id].to_i
          company = Company.find_by!(id: id)
          company.destroy!
          {id: id, message: success_delete_message('id', id)}
        end
      end
    end
  end
end