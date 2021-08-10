export const BASE_URL = 'https://api.films-rover.nomoredomains.icu';
// export const BASE_URL = "http://localhost:3001";

const checkResponse = (res) => {
  console.log('### auth-checkResponse', res);
  if (!res.ok) {
    return Promise.reject(res);
  }
  return res.json();
};

/* POST /signup — создаёт пользователя с переданными в теле запроса name, email и password. */
export const register = (name, email, password) => {
  console.log('FRONT-auth###register:', name, email, password);
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

/* POST /signin ( email, password )*/
export const authorize = (email, password) => {
  console.log('FRONT-auth###authorize:', email, password);
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};
// /* GET  - возвращает информацию о текущем пользователе  */
export const getProfile = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
