import React from 'react';
import SearchForm from '../Movies/SearchForm.js';
import SavedMoviesCardList from './SavedMoviesCardList.js';
// import Preloader from '../Movies/Preloader.js';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <SearchForm />
      {/* <Preloader /> */}
      <SavedMoviesCardList />
    </main>
  );
}

export default SavedMovies;
