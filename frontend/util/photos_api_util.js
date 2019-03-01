
export const fetchPhotos = () => {
  return $.ajax({
    method: "GET",
    url: "/api/photos"
  })
}

export const fetchPhoto = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/photos/${id}`
  })
}

export const createPhoto = (photoForm) => {
  return $.ajax({
    method: "POST",
    url: `/api/photos`,
    data: { photoForm }
  })
}

export const updatePhoto = (photoForm) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/photos/${photoForm.id}`,
    data: { photoForm }
  })
}

export const deletePhoto = (photoId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/photos/${photoId}`
  })
}