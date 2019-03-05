@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
  end
end


# json.set! "photos" do
#   @photos.each do |photo|
#     json.set! photo.id do
#       json.partial! 'photo', photo: photo
#       if photo.image.attached?
#         json.photoUrl url_for(photo.image)
#       else
#         json.photoUrl nil
#       end
#     end
#   end
# end

# json.set! "users" do
#   json.partial! "api/users/user", collection: @photo.user
# end

# json.photos photos_hash
# json.users users_hash