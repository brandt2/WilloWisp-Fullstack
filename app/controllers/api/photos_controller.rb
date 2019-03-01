class Api::PhotosController < ApplicationController

  def index
    
  end

  def show
    
  end

  def create
    
  end

  def update
    
  end

  def destroy
    
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :owner_id)
  end

end
