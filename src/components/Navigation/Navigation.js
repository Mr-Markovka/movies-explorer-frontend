import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  const location = useLocation();
  const basicColor = {
    background: '#202020',
  };
  const landingColor = {
    background: '#073042',
  };

  const backGround = location.pathname === '/' ? landingColor : basicColor;

  return (
    <nav className='navigation' style={backGround}>
      <div className='navigation' style={backGround}>
        <img className='navigation__header-logo' alt='Логотип.' src={logo} />
        <input type='checkbox' id='checkbox' className='navigation__checkbox' />
        <label htmlFor='checkbox' className='navigation__btn'>
          <div className='navigation__icon'></div>
        </label>

        <div className='navigation__container'>
          <ul className='navigation__list'>
            {props.loggedIn ? (
              <>
                <li className='navigation__item'>
                  <NavLink
                    exact
                    to='/'
                    activeClassName='navigation__link_active'
                    className='navigation__link'
                  >
                    Главная
                  </NavLink>
                </li>
                <li className='navigation__item'>
                  <NavLink
                    to='/movies'
                    activeClassName='navigation__link_active'
                    className='navigation__link'
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className='navigation__item'>
                  <NavLink
                    to='/saved-movies'
                    activeClassName='navigation__link_active'
                    className='navigation__link'
                  >
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className='navigation__item'>
                  <NavLink
                    exact
                    to='/signup'
                    activeClassName='navigation__link_active'
                    className='navigation__link'
                  >
                    Регистрация
                  </NavLink>
                </li>
                <li className='navigation__item'>
                  <NavLink
                    to='/signin'
                    activeClassName='navigation__link_active'
                    className='navigation__link'
                  >
                    Войти
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {props.loggedIn ? (
            <div className='navigation__block_profile'>
              <NavLink
                to='/profile'
                activeClassName='navigation__link_active'
                className='navigation__link navigation__profile-text'
              >
                Аккаунт
              </NavLink>
              <div className='navigation__profile-logo' />
            </div>
          ) : (
            <div className='navigation__block_profile_none'>
              <NavLink
                to='/profile'
                activeClassName='navigation__link_active'
                className='navigation__link navigation__profile-text'
              >
                Аккаунт
              </NavLink>
              <div className='navigation__profile-logo' />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
