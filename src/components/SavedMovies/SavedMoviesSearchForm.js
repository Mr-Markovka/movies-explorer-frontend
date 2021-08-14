import React from 'react';
import { useState } from 'react';
import './SavedMoviesSearchForm.css';

function SavedMoviesSearchForm(props) {
  const [film, setFilm] = useState('');
  const [checked, setChecked] = useState(false);
  const [filmError, setFilmError] = useState(false);

  const handleChange = (e) => {
    setFilm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (film === '') {
      setFilmError(true);
    } else {
      props.onSearchRequestSM(film);
      setFilmError(false);
    }
  };

  const handleClick = () => {
    setChecked(!checked);
    props.onCheckboxSM();
  };

  return (
    <section className='saved-movies-search-form'>
      <form
        className='saved-movies-search-form__block'
        noValidate
        onSubmit={handleSubmit}
      >
        <label>
          <input
            className='saved-movies-search-form__input'
            onChange={handleChange}
            value={film}
            name='film'
            type='text'
            placeholder='Фильм'
            autoComplete='off'
            required
          />
          {filmError && (
            <span className='saved-movies-search-form__error'>
              Нужно ввести ключевое слово
            </span>
          )}
        </label>

        <button className='saved-movies-search-form__button' type='submit'>
          Найти
        </button>
      </form>

      <div className='saved-movies-search-form__checkbox-wrap'>
        <label
          className='saved-movies-search-form__checkbox-label'
          htmlFor='checkboxSM'
        >
          <span
            className={
              checked
                ? 'saved-movies-search-form__visible-checkbox_checked'
                : 'saved-movies-search-form__visible-checkbox'
            }
          />
          <input
            className='saved-movies-search-form__invisible-checkbox'
            type='checkbox'
            id='checkboxSM'
            defaultChecked={checked}
            onChange={handleClick}
          />
        </label>

        <p className='saved-movies-search-form__checkbox-text'>
          Короткометражки
        </p>
      </div>
    </section>
  );
}

export default SavedMoviesSearchForm;
