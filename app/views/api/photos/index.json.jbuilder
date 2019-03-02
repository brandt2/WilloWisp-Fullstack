@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
    if photo.image.attached?
      json.photoUrl url_for(photo.image)
    else
      json.photoUrl nil
    end
  end
end