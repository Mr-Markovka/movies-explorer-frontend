import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Register.css';

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameDirtu, setNameDirtu] = useState(false);
  const [emailDirtu, setEmailDirtu] = useState(false);
  const [passwordDirtu, setPasswordDirtu] = useState(false);
  const [nameError, setNameError] = useState('Введены некорректные данные');
  const [emailError, setEmailError] = useState('Введены некорректные данные');
  const [passwordError, setPasswordError] = useState(
    'Введены некорректные данные'
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    const re = /^[a-zA-Zа-яА-Я_-]{2,40}$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Некорректное имя');
      if (!e.target.value) {
        setNameError('Имя не должен быть пустым');
      }
    } else {
      setNameError('');
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
      if (!e.target.value) {
        setEmailError('Email не должен быть пустым');
      }
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
    props.onRegister({ name, email, password });
  };
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirtu(true);
        break;
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
    <section className='register'>
      <h2 className='register__greeting'>Добро пожаловать!</h2>
      <form
        className='register__form'
        name='signup'
        noValidate
        onSubmit={handleSubmit}
      >
        <label htmlFor='name' className='register__label'>
          Имя
          <input
            id='name'
            onChange={handleNameChange}
            value={name}
            className='register__input input-name'
            name='name'
            type='text'
            minLength='2'
            maxLength='40'
            pattern='^[A-Za-zА-Яа-яЁё\s]{2,40}'
            autoComplete='off'
            required
            onBlur={(e) => blurHandler(e)}
          />
          {nameDirtu && nameError && (
            <span className='register__input-error'>{nameError}</span>
          )}
        </label>

        <label htmlFor='email' className='register__label'>
          E-mail
          <input
            id='email'
            onChange={handleEmailChange}
            value={email}
            className='register__input input-email'
            name='email'
            type='email'
            minLength='2'
            maxLength='40'
            autoComplete='off'
            required
            onBlur={(e) => blurHandler(e)}
          />
          {emailDirtu && emailError && (
            <span className='register__input-error'>{emailError}</span>
          )}
        </label>

        <label htmlFor='password' className='register__label'>
          Пароль
          <input
            id='password'
            onChange={handlePasswordChange}
            value={password}
            className='register__input input-email'
            name='password'
            type='password'
            minLength='8'
            maxLength='40'
            autoComplete='off'
            required
            onBlur={(e) => blurHandler(e)}
          />
          {passwordDirtu && passwordError && (
            <span className='register__input-error'>{passwordError}</span>
          )}
        </label>

        <div className='register__wrap'>
          <span className='register__request-error'>{props.regError}</span>
          <button
            disabled={!formValid}
            className={`register__btn-submit ${
              !formValid && 'register__btn-submit_invalid'
            }`}
            type='submit'
          >
            Зарегистрироваться
          </button>
        </div>
      </form>

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
