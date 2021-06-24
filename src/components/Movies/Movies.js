import React from 'react';
import SearchForm from './SearchForm.js';
import MoviesCardList from './MoviesCardList.js';
// import Preloader from './Preloader.js';
import './Movies.css';

function Movies() {
  return (
    <main className='movies'>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </main>
  );
}

export default Movies;
