class CategoriesController < ApplicationController

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
  end

  def destroy
  end

  private
    def category_params
      params.require(:category).permit(:name)
    end
end
