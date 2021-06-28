import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__block'>
        <label>
          <input
            className='search-form__input'
            name='film'
            type='text'
            placeholder='Фильм'
            autocomplete='off'
            required
          />
        </label>

        <button className='search-form__button'>Найти</button>
      </form>

      <div className='checkbox__box'>
        <label className='checkbox__label'>
          <input className='invisible-checkbox' type='checkbox' />
          <span className='visible-checkbox' />
        </label>
        <p className='checkbox__text'>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
