
json.extract! album, :id, :title, :description, :photo_ids, :user_id

# gets all the photos and puts them into an array
json.photos album.photos, partial: 'api/photos/photo', as: :photo