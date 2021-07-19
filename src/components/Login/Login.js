import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailDirtu, setEmailDirtu] = useState(false);
  const [passwordDirtu, setPasswordDirtu] = useState(false);
  const [emailError, setEmailError] = useState('Введены некорректные данные');
  const [passwordError, setPasswordError] = useState(
    'Введены некорректные данные'
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 40) {
      setPasswordError(
        'Пароль должен содержать не менее 8 символов и не более 40 символов'
      );
      if (!e.target.value) {
        setPasswordError('Пароль не должен быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin({ email, password });
  };
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirtu(true);
        break;
      case 'password':
        setPasswordDirtu(true);
        break;
      default:
        break;
    }
  };
  return (
    <section className='login'>
      <h2 className='login__greeting'>Рады видеть!</h2>
      <form
        className='login__form'
        name='signin'
        noValidate
        onSubmit={handleSubmit}
      >
        <label htmlFor='email' className='login__label'>
          E-mail
          <input
            id='email'
            onChange={handleEmailChange}
            value={email}
            className='login__input input-email'
            name='email'
            type='email'
            minLength='2'
            maxLength='40'
            autoComplete='off'
            required
            onBlur={(e) => blurHandler(e)}
          />
          {emailDirtu && emailError && (
            <span className='login__input-error'>{emailError}</span>
          )}
        </label>

        <label htmlFor='password' className='login__label'>
          Пароль
          <input
            id='password'
            onChange={handlePasswordChange}
            value={password}
            className='login__input input-email'
            name='password'
            type='password'
            minLength='8'
            maxLength='40'
            autoComplete='off'
            required
            onBlur={(e) => blurHandler(e)}
          />
          {passwordDirtu && passwordError && (
            <span className='login__input-error'>{passwordError}</span>
          )}
        </label>

        <div className='login__wrap'>
          <span className='login__request-error'>{props.authError}</span>
          <button
            disabled={!formValid}
            className={`login__btn-submit ${
              !formValid && 'login__btn-submit_invalid'
            }`}
            type='submit'
          >
            Войти
          </button>
        </div>
      </form>

      <div className='login__box-login'>
        <p className='login__paragraph-login'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='login__link-register'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
