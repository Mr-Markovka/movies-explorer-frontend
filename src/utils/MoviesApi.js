class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this.headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getMoviesList() {
    return fetch(`${this._baseUrl}`, {
      headers: { ...this.headers },
    }).then(this._getResponseData);
  }
}

const config = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  // baseUrl: "http://localhost:3001",
  headers: {
    'Content-Type': 'application/json',
  },
};

const moviesApi = new MoviesApi(config);

export default moviesApi;
