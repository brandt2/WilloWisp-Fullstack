class Api::PhotosController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @photos = Photo.all
    render :index
  end

  def show
    @photo = Photo.find([params[:id]])
    if @photo
      render :show
    else
      render json: @photo.errors.full_messages, status: 404
    end
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id
  end

  def update
    
  end

  def destroy
    
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description)
  end

end
