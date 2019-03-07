class Api::CommentsController < ApplicationController
  before_action :require_login

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.photo_id = params[:photo][:photo_id].to_i
    if @comment.save

    else
      
    end
  end

  def update
    
  end

  def destroy
    
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :photo_id)
  end

end
