import React from 'react';
import { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const [film, setFilm] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setFilm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearchRequest(film);
  };

  const handleClick = () => {
    setChecked(!checked);
    props.onCheckbox();
  };

  return (
    <section className='search-form'>
      <form className='search-form__block' noValidate onSubmit={handleSubmit}>
        <label>
          <input
            className='search-form__input'
            onChange={handleChange}
            value={film}
            name='film'
            type='text'
            placeholder='Фильм'
            autoComplete='off'
            required
          />
          {props.filmError && (
            <span className='search-form-error'>
              Нужно ввести ключевое слово
            </span>
          )}
        </label>

        <button className='search-form__button' type='submit'>
          Найти
        </button>
      </form>

      <div className='search-form__checkbox-wrap'>
        <label className='search-form__checkbox-label' htmlFor='checkboxM'>
          <span
            className={
              checked
                ? 'search-form__visible-checkbox_checked'
                : 'search-form__visible-checkbox'
            }
          />
          <input
            className='search-form__invisible-checkbox'
            type='checkbox'
            id='checkboxM'
            defaultChecked={checked}
            onChange={handleClick}
          />
        </label>

        <p className='search-form__checkbox-text'>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
