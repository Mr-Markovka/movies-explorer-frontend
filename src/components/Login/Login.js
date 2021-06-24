import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <section
      className='login'
    >

      <form className='login__form' name='form' noValidate>

        <label className='login__label'>
          E-mail
        <input
            className='login__input input-email'
            name='email'
            type='email'
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          {/* <span className="login__input-error">Что-то пошло не так...</span> */}
        </label>

        <label className='login__label'>
          Пароль
        <input
            className='login__input input-email'
            name='password'
            type='text'
            minLength="8"
            maxLength="40"
            autoComplete="off"
            required
          />
          {/* <span className="login__input-error">Что-то пошло не так...</span> */}
        </label>

      </form>

      <button className='login__btn-submit' type='submit'>
        Войти
    </button>
      <div className='login__box-login'>
        <p className='login__paragraph-login'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='login__link-register'>
          Регистрация
        </Link>
      </div>
    </ section>
  );
}

export default Login;
