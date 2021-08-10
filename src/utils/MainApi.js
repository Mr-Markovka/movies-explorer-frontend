class MainApi {
  constructor({ baseUrl, headers, imgUrl }) {
    this._url = baseUrl;
    this.headers = headers;
    this.imgUrl = imgUrl;
  }
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  }

  // /* GET  - возвращает информацию о текущем пользователе
  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: { ...this.headers, authorization: `Bearer ${token}` },
    }).then(this._getResponseData);
  }

  setUserInfo(resData, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: { ...this.headers, authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name: resData.name,
        email: resData.email,
      }),
    }).then(this._getResponseData);
  }

  // GET /movies возвращает все сохранённые пользователем фильмы
  getMovies(token) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: { ...this.headers, authorization: `Bearer ${token}` },
    }).then(this._getResponseData);
  }

  // POST /movies создаёт фильм с переданными в теле
  // country,director,duration,year,description,image,trailer,nameRU,nameEN,thumbnail,movieId
  saveMovie(data, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: { ...this.headers, authorization: `Bearer ${token}` },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${this.imgUrl}${data.image.url}`,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        trailer: data.trailerLink,
        thumbnail: `${this.imgUrl}${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      }),
    }).then(this._getResponseData);
  }

  // DELETE /movies/movieId удаляет сохранённый фильм по id
  deleteMovie(id, token) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: { ...this.headers, authorization: `Bearer ${token}` },
    }).then(this._getResponseData);
  }
}

const config = {
  baseUrl: 'http://api.films-rover.nomoredomains.icu',
  // baseUrl: "http://localhost:3001",
  headers: {
    'Content-Type': 'application/json',
  },
  imgUrl: 'https://api.nomoreparties.co',
};

const mainApi = new MainApi(config);

export default mainApi;
