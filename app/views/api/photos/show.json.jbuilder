
json.set! @photo.id do
  json.extract! @photo, :id, :title, :description, :owner_id
    if @photo.image.attached?
      json.photoUrl url_for(@photo.image)
    else
      json.photoUrl nil
    end
end
