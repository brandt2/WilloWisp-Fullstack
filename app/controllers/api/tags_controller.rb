class Api::TagsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def show
    @tag = Tag.find(params[:id])
    if @tag
      render :show
    else
      render json: @tag.errors.full_messages, status: 404
    end
  end

  def index
    @tags = (
      if params[:photo_id]
        Tag.find(params[:photo_id])
      else
        Tag.all
      end
    )
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def update
    
  end

  def destroy
    
  end

  private

  def tag_params
    params.require(:tag).permit(:tag_name, :photo_id)
  end

end
