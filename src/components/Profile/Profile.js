import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [nameDirtu, setNameDirtu] = useState(false);
  const [emailDirtu, setEmailDirtu] = useState(false);
  const [nameError, setNameError] = useState('Введены некорректные данные');
  const [emailError, setEmailError] = useState('Введены некорректные данные');
  const [formValid, setFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

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

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    props.onUpdateUser({
      name,
      email,
    });
    setIsSubmitting(false);
    setFormValid(false);
    setName('');
    setEmail('');
    setSuccess('Профиль успешно сохранен');
  }
  useEffect(() => {
    if (nameError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirtu(true);
        break;
      case 'email':
        setEmailDirtu(true);
        break;
      default:
        break;
    }
  };

  return (
    <section className='profile'>
      <h2 className='profile__greeting'>Привет, {currentUser.name}!</h2>

      <form
        className='profile__form'
        name='profile'
        noValidate
        onSubmit={handleSubmit}
      >
        <div className='profile__box-up'>
          <label htmlFor='name' className='label'>
            <input
              id='name'
              onChange={handleNameChange}
              value={name}
              className='profile__input input-name'
              name='name'
              type='text'
              placeholder='Имя'
              minLength='2'
              maxLength='40'
              pattern='^[A-Za-zА-Яа-яЁё\s]{2,40}'
              autoComplete='off'
              required
              onBlur={(e) => blurHandler(e)}
              disabled={isSubmitting}
            />
            {nameDirtu && nameError && (
              <span className='profile__input-error'>{nameError}</span>
            )}
          </label>
          <p className='profile__text-right'>{currentUser.name}</p>
        </div>

        <div className='profile__box-down'>
          <label htmlFor='email' className='label'>
            <input
              id='email'
              onChange={handleEmailChange}
              value={email}
              className='profile__input input-email'
              name='email'
              type='email'
              minLength='2'
              maxLength='40'
              placeholder='E-mail'
              autoComplete='off'
              required
              onBlur={(e) => blurHandler(e)}
              disabled={isSubmitting}
            />
            {emailDirtu && emailError && (
              <span className='profile__input-error'>{emailError}</span>
            )}
          </label>

          <p className='profile__text-right'>{currentUser.email}</p>
        </div>
        <div className='profile__wrap'>
          <span className='profile__request-error'>{props.authError}</span>
          <span className='profile__request-success'>{success}</span>
          <button
            className={`${!formValid && 'profile__submit-button'} ${
              formValid && 'profile__btn-submit-edit'
            }`}
            disabled={!formValid && !isSubmitting}
            type='submit'
          >
            Редактировать
          </button>
        </div>
      </form>

      <div>
        <Link
          to='/signin'
          className='profile__link-auth'
          onClick={props.onLogout}
        >
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
