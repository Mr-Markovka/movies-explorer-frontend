import React from 'react';
import logo from '../../images/logo.svg';
import { Link, Route } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <Route exact path='/'>
        <header className='header header_landing'>
          <img className='header__logo' alt='Логотип.' src={logo} />
          <div className='header__block header__block_landing'>
            <Link to='/signup' className='header__link header__link_auth'>
              Регистрация
            </Link>

            <Link to='/signin'>
              <button className='header__signin-button'>Войти</button>
            </Link>
          </div>
        </header>
      </Route>

      <Route path='/movies'>
        <header className='header'>
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
      </Route>

      <Route path='/saved-movies'>
        <header className='header'>
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
      </Route>

      <Route path='/profile'>
        <header className='header'>
          <Link to='/' className='header__link'>
            <img className='header__logo_auth' alt='Логотип.' src={logo} />
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
      </Route>

      <Route path='/signup'>
        <header className='header'>
          <div className='header__block_auth'>
            <Link to='/' className='header__link'>
              <img className='header__logo_auth' alt='Логотип.' src={logo} />
            </Link>
            <p className='header__auth'>Добро пожаловать!</p>
          </div>
        </header>
      </Route>

      <Route path='/signin'>
        <header className='header'>
          <div className='header__block_auth'>
            <Link to='/' className='header__link'>
              <img className='header__logo_auth' alt='Логотип.' src={logo} />
            </Link>
            <p className='header__auth'>Рады видеть!</p>
          </div>
        </header>
      </Route>
    </>
  );
}

export default Header;
