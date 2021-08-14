import React from 'react';
import SavedMoviesCard from './SavedMoviesCard';
import './SavedMoviesCardList.css';

function SavedMoviesCardList(props) {
  const savedFilms = props.savedMovies.filter((movie) => {
    if (props.isCheckedSM === false) {
      if (props.searchQuerySM !== '') {
        return movie.nameRU
          .toLowerCase()
          .includes(props.searchQuerySM.toLowerCase());
      } else if (props.searchQuerySM === '') {
        return movie.nameRU
          .toLowerCase()
          .includes(props.searchQuerySM.toLowerCase());
      } else {
        return movie;
      }
    } else if (props.isCheckedSM === true) {
      if (props.searchQuerySM === '' && props.isCheckedSM === true) {
        return movie.duration <= 40;
      } else if (props.searchQuerySM !== '' && props.isCheckedSM === true) {
        return (
          movie.duration <= 40 &&
          movie.nameRU.toLowerCase().includes(props.searchQuerySM.toLowerCase())
        );
      }
    }
  });

  const notSavedMovies =
    savedFilms.length === 0 && props.isCheckedSM === false ? (
      <div className='saved-movies-cards__notFound'>
        Нет сохраненных фильмов
      </div>
    ) : (
      savedFilms.map((item) => (
        <SavedMoviesCard
          key={item._id}
          savedMovie={item}
          alt={item.nameRU}
          src={item.image}
          nameRU={item.nameRU}
          duration={item.duration}
          trailerLink={item.trailer}
          onMovieDelete={props.onMovieDelete}
        />
      ))
    );

  return (
    <section className='saved-movies-cards'>
      <ul className='saved-movies-cards__list'>{notSavedMovies}</ul>
    </section>
  );
}

export default SavedMoviesCardList;
