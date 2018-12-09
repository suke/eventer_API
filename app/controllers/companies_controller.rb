class CompaniesController < ApplicationController

  def index
    return render 'admin/top'
  end

  def show
    return render 'admin/top'
  end

  def create
    return render 'admin/top'
  end

  def edit
    return render 'admin/top'
  end

  def update
    company = Company.find_by!(id: params[:id])
    company.update!(company_params)
    render json: company
  end

  def destroy
    id = params[:id].to_i
    company = Company.find_by!(id: id)
    company.destroy!
    render json: {id: id, message: success_message('id', id)}
  end

  private
    def company_params
      params.require(:company).permit(:name)
    end
end
