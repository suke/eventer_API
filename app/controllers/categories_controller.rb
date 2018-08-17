class CategoriesController < ApplicationController

  def index
    categories = Category.all
    render json: categories
  end

  def show
    category = Category.find_by!(id: params[:id])
    render json: category
  end

  def create
    category = Category.create!(category_params)
    render json: category
  end

  def update
    category = Category.find_by!(id: params[:id])
    category.update!(category_params)
    render json: category
  end

  def destroy
    category = Category.find_by!(id: params[:id])
    category.destroy!
    render json: success_message('id', params[:id])
  end

  private
    def category_params
      params.require(:category).permit(:name)
    end
end
