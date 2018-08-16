class CompaniesController < ApplicationController

  def index
    companies = Company.all
    render json: companies
  end

  def show
    company = Company.find_by!(id: params[:id])
    render json: company
  end

  def create
    company = Company.create!(company_params)
    render json: company
  end

  def update
    company = Company.find_by!(id: params[:id])
    company.update!(company_params)
    render json: company
  end

  def destroy
    company = Company.find_by!(id: params[:id])
    company.destroy!
    render json: success_message('id', params[:id])
  end

  private
    def company_params
      params.require(:company).permit(:name)
    end
end
