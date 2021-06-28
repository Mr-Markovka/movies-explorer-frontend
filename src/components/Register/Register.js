import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section className='register'>
      <form className='register__form' name='form' noValidate>
        <label className='register__label'>
          Имя
          <input
            className='register__input input-name'
            name='name'
            type='text'
            minLength='2'
            maxLength='40'
            autoComplete='off'
            required
          />
          {/* <span className="register__input-error">Что-то пошло не так...</span> */}
        </label>

        <label className='register__label'>
          E-mail
          <input
            className='register__input input-email'
            name='email'
            type='email'
            minLength='2'
            maxLength='40'
            autoComplete='off'
            required
          />
          {/* <span className="register__input-error">Что-то пошло не так...</span> */}
        </label>

        <label className='register__label'>
          Пароль
          <input
            className='register__input input-email'
            name='password'
            type='password'
            minLength='8'
            maxLength='40'
            autoComplete='off'
            required
          />
          <span className='register__input-error'>Что-то пошло не так...</span>
        </label>
      </form>

      <span className='register__request-error'>
        {/* Пользователь с таким email уже существует. */}
        При регистрации пользователя произошла ошибка.
      </span>

      <button
        className='register__btn-submit register__btn-submit_invalid'
        type='submit'
      >
        Зарегистрироваться
      </button>
      <div className='register__box-register'>
        <p className='register__paragraph-register'>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__link-login'>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
