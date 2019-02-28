export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);

// for testing
window.login = login;
window.logout = logout;