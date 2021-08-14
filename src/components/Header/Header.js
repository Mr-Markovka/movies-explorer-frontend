import React from 'react';
import logo from '../../images/logo.svg';
import { Link, Route } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation.js';
import './Header.css';

function Header(props) {
  const headerLoggedIn = props.loggedIn ? (
    <>
      <div className='header__block header__block_movies'>
        <Link to='/movies' className='header__link header__movies'>
          Фильмы
        </Link>
        <Link to='/saved-movies' className='header__link header__movies'>
          Сохранённые фильмы
        </Link>
      </div>
      <div className='header__block header__block_profile'>
        <Link to='/profile' className='header__link header__profile'>
          Аккаунт
        </Link>
        <div className='header__profile-logo' />
      </div>
    </>
  ) : (
    <div className='header__block header__block_landing'>
      <Link to='/signup' className='header__link header__link_auth'>
        Регистрация
      </Link>

      <Link to='/signin'>
        <button className='header__signin-button'>Войти</button>
      </Link>
    </div>
  );

  return (
    <>
      <Route exact path='/'>
        <header className='header header_landing header_burger'>
          <img className='header__logo' alt='Логотип.' src={logo} />
          {headerLoggedIn}
        </header>
        <Navigation loggedIn={props.loggedIn} />
      </Route>

      <Route path='/movies'>
        <header className='header header_burger'>
          <Link to='/' className='header__link'>
            <img className='header__logo' alt='Логотип.' src={logo} />
          </Link>

          <div className='header__block header__block_movies'>
            <p className='header__movies header__link_active'>Фильмы</p>
            <Link to='/saved-movies' className='header__link header__movies'>
              Сохранённые фильмы
            </Link>
          </div>

          <div className='header__block header__block_profile'>
            <Link to='/profile' className='header__link header__profile'>
              Аккаунт
            </Link>
            <div className='header__profile-logo' />
          </div>
        </header>
        <Navigation loggedIn={props.loggedIn} />
      </Route>

      <Route path='/saved-movies'>
        <header className='header header_burger'>
          <Link to='/' className='header__link'>
            <img className='header__logo' alt='Логотип.' src={logo} />
          </Link>
          <div className='header__block header__block_movies'>
            <Link to='/movies' className='header__link header__movies'>
              Фильмы
            </Link>
            <p className='header__movies header__link_active'>
              Сохранённые фильмы
            </p>
          </div>

          <div className='header__block header__block_profile'>
            <Link to='/profile' className='header__link header__profile'>
              Аккаунт
            </Link>
            <div className='header__profile-logo' />
          </div>
        </header>
        <Navigation loggedIn={props.loggedIn} />
      </Route>

      <Route path='/profile'>
        <header className='header header_burger'>
          <Link to='/' className='header__link'>
            <img className='header__logo' alt='Логотип.' src={logo} />
          </Link>
          <div className='header__block header__block_movies'>
            <Link to='/movies' className='header__link header__movies'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='header__link header__movies'>
              Сохранённые фильмы
            </Link>
          </div>

          <div className='header__block header__block_profile'>
            <p className='header__profile header__link_active'>Аккаунт</p>
            <div className='header__profile-logo' />
          </div>
        </header>
        <Navigation loggedIn={props.loggedIn} />
      </Route>

      <Route path='/signup'>
        <header className='header'>
          <div className='header__block_auth'>
            <Link to='/' className='header__link'>
              <img className='header__logo_auth' alt='Логотип.' src={logo} />
            </Link>
          </div>
        </header>
      </Route>

      <Route path='/signin'>
        <header className='header'>
          <div className='header__block_auth'>
            <Link to='/' className='header__link'>
              <img className='header__logo_auth' alt='Логотип.' src={logo} />
            </Link>
          </div>
        </header>
      </Route>
    </>
  );
}

export default Header;
