import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <section className='profile'>
      <h2 className='profile__greeting'>Привет, Игнат!</h2>

      <form className='profile__form' name='form' noValidate>
        <div className='profile__box-up'>
          <label className='label'>
            <input
              className='profile__input input-name'
              name='name'
              type='text'
              placeholder='Имя'
              minLength='2'
              maxLength='40'
              autocomplete='off'
              required
            />
            {/* <span className="profile__input-error">Что-то пошло не так...</span> */}
          </label>
          <p className='profile__text-right'>Игнат</p>
        </div>

        <div className='profile__box-down'>
          <label className='label'>
            <input
              className='profile__input input-email'
              name='email'
              type='email'
              minLength='2'
              maxLength='40'
              placeholder='E-mail'
              autocomplete='off'
              required
            />
          </label>
          {/* <span className="profile__input-error">Что-то пошло не так...</span> */}
          <p className='profile__text-right'>pochta@yandex.ru</p>
        </div>
      </form>

      <span className='profile__request-error'>
        При обновлении профиля произошла ошибка.
        {/* Пользователь с таким email уже существует. */}
      </span>

      <div>
        <button className='profile__submit-button' type='submit'>
          Редактировать
        </button>

        <Link to='/signin' className='profile__link-auth'>
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
