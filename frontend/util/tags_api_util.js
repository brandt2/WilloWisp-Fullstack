
export const fetchTags = () => {
  return $.ajax({
    method: "GET",
    url: "/api/tags"
  });
};

export const fetchTag = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/tags/${id}`
  });
};

export const createTag = (tag) => {
  return $.ajax({
    method: "POST",
    url: "/api/tags",
    data: tag
  })
}