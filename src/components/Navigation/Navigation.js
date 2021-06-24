import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <img className='navigation__header-logo' alt='Логотип.' src={logo} />
      <input type='checkbox' id='checkbox' className='navigation__checkbox' />
      <label for='checkbox' className='navigation__btn'>
        <div className='navigation__icon'></div>
      </label>
      <div className='navigation__container'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <Link to='/' className='navigation__link'>
              Главная
            </Link>
          </li>
          <li className='navigation__item'>
            <Link
              to='/movies'
              className='navigation__link navigation__link_active'
            >
              Фильмы
            </Link>
          </li>
          <li className='navigation__item'>
            <Link to='/saved-movies' className='navigation__link'>
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <div className='navigation__block_profile'>
          <Link
            to='/profile'
            className='navigation__link navigation__profile-text'
          >
            Аккаунт
          </Link>
          <div className='navigation__profile-logo' />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
