
json.set! @photo.id do
  json.partial! 'photo', photo: @photo
end


# json.set! "photo" do
#   json.set! @photo.id do
#     json.extract! @photo, :id, :title, :description, :owner_id
#       if @photo.image.attached?
#         json.photoUrl url_for(@photo.image)
#       else
#         json.photoUrl nil
#       end
#   end
# end

# json.set! "user" do
#   json.partial! "api/users/user", user: @photo.user
# end