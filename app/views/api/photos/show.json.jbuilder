
json.set! @photo.id do
  json.extract! @photo, :id, :title, :description, :owner_id
end