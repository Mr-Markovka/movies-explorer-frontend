import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Main from '../Main/Main.js';
import Profile from '../Profile/Profile.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute.js';

import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';
import * as auth from '../../utils/auth.js';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filmError, setFilmError] = useState(false);
  const [notFound, setNotFound] = useState(true);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isMoviesLoadError, setIsMoviesLoadError] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [regError, setRegError] = useState(null);
  const [currentUser, setCurrentUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (loggedIn) {
      mainApi
        .getUserInfo(token)
        .then((userData) => {
          setLoggedIn(true);
          localStorage.setItem('loggedIn', loggedIn);
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });

      mainApi
        .getMovies(token)
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [history, loggedIn]);

  useEffect(() => {
    const BeatFilms = JSON.parse(localStorage.getItem('BeatFilms'));
    setFilmError(false);
    if (searchQuery !== '' && BeatFilms === null) {
      setFilmError(false);
      handleRequest();
    } else if (searchQuery !== '' && BeatFilms !== null) {
      setMovies(BeatFilms);
    }
  }, [searchQuery]);

  function tokenCheck() {
    if (localStorage.getItem('jwt')) {
      let token = localStorage.getItem('jwt');
      mainApi
        .getUserInfo(token)
        .then((user) => {
          setLoggedIn(true);
          setCurrentUser(user);
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  }

  function handleRegister({ name, email, password }) {
   
    console.log('FRONT-APP###handleRegister:',  name, email, password );
    setRegError();
    return auth
      .register(name, email, password)
      
      .then((res) => {
        console.log('FRONT-APP###handleRegister-res:',  res );
        if (res._id) {
          localStorage.setItem('userId', res._id);
          // history.push('/signin');
          handleLogin({ email: email, password: password });
          console.log('FRONT-APP###handleRegister---handleLogin:',  { email: email, password: password });
        }
      })
      .catch((err) => {
        console.log('FRONT-APP###handleRegister-err-При регистрации:', err);
        console.log(`При регистрации: ${err.statusText}`);
        if (err.status === 409) {
          setRegError('Пользователь с таким email уже существует');
        } else if (err.status === 400) {
          setRegError('При регистрации пользователя произошла ошибка');
        }
      });
  }

  function handleLogin({ email, password }) {
    console.log('FRONT-APP###handleLogin:', email, password);
  
    setAuthError();
    return auth
      .authorize(email, password)
      .then((data) => {
        console.log('FRONT-APP###handleLogin:', data);
        if (data.token) {
          console.log('FRONT-APP###handleLogin- if data.token:', data.token);
          setLoggedIn(true);
          localStorage.setItem('jwt', data.token);
          history.push('/movies');
          return;
        }
      })
      .catch((err) => {
        console.log('FRONT-APP###handleLogin-err-При авторизации:', err);
        console.log(`При авторизации: ${err.statusText}`);
        if (err.status === 401) {
          setAuthError('Вы ввели неправильный логин или пароль');
        } else if (err.status === 400) {
          setAuthError(
            'При авторизации произошла ошибка. Токен не передан или передан не в том формате.'
          );
        }
      });
  }

  function handleLogout() {
    history.push('/');
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId');
    localStorage.removeItem('BeatFilms');
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
  }

  function handleUpdateUser(data) {
    setAuthError();
    const token = localStorage.getItem('jwt');
    mainApi
      .setUserInfo(data, token)
      .then((resData) => {
        setCurrentUser(resData);
      })
      .catch((err) => {
        console.log(err);
        console.log(`При обновлении: ${err.statusText}`);
        if (err.status === 409) {
          setAuthError('Пользователь с таким email уже существует');
        } else if (err.status === 400) {
          setAuthError('При обновлении профиля произошла ошибка');
        }
      });
  }

  function handleMovieSave(movie) {
    const token = localStorage.getItem('jwt');
    mainApi
      .saveMovie(movie, token)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieSaveDelete(movie) {
    const isSaved = savedMovies.find((i) => i.movieId === movie.id);
    if (isSaved) {
      handleMovieDelete(isSaved);
    }
  }

  // DELETE /movies/movieId удаляет сохранённый фильм по id
  function handleMovieDelete(movie) {
    const token = localStorage.getItem('jwt');
    mainApi
      .deleteMovie(movie._id, token)
      .then((deletMovie) => {
        setSavedMovies(savedMovies.filter((m) => m._id !== deletMovie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRequest() {
    setNotFound(false);
    setIsMoviesLoading(true);
    setIsMoviesLoadError();
    moviesApi
      .getMoviesList()
      .then((data) => {
        setMovies(data);
        localStorage.setItem('BeatFilms', JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem('BeatFilms');
        setIsMoviesLoadError(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
      })
      .finally(() => setIsMoviesLoading(false));

    setFilmError(false);
  }

  function handleSearchRequest(film) {
    const BeatFilms = JSON.parse(localStorage.getItem('BeatFilms'));
    setSearchQuery(film);
    if (searchQuery === '') {
      setFilmError(true);
    } else if (searchQuery !== '' && BeatFilms === null) {
      setFilmError(false);
      handleRequest();
    } else if (searchQuery !== '' && BeatFilms !== null) {
      setMovies(BeatFilms);
    }
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />

        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>

          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
            isMoviesLoading={isMoviesLoading}
            isMoviesLoadError={isMoviesLoadError}
            movies={movies}
            onSearchRequest={handleSearchRequest}
            filmError={filmError}
            inputSQ={searchQuery}
            notFound={notFound}
            onMovieSave={handleMovieSave}
            savedMovies={savedMovies}
            onMovieSaveDelete={handleMovieSaveDelete}
            setIsMoviesLoadError={setIsMoviesLoadError}
          ></ProtectedRoute>

          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            savedMovies={savedMovies}
            onMovieDelete={handleMovieDelete}
          ></ProtectedRoute>

          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
            authError={authError}
          ></ProtectedRoute>

          <Route path='/signin'>
            <Login onLogin={handleLogin} authError={authError} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegister} regError={regError} />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
