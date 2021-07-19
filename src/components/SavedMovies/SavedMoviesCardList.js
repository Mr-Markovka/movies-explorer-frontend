import React from 'react';
import SavedMoviesCard from './SavedMoviesCard';
import './SavedMoviesCardList.css';

function SavedMoviesCardList(props) {
  const savedMovie = props.savedMovies.filter((movie) => {
    if (props.searchQuerySM === '' && props.isChecked === true) {
      return movie.duration <= 40;
    } else if (props.searchQuerySM !== '' && props.isChecked === true) {
      return (
        movie.duration <= 40 &&
        movie.nameRU.toLowerCase().includes(props.searchQuerySM.toLowerCase())
      );
    } else if (props.searchQuerySM === '' && props.isChecked === false) {
      return movie.nameRU
        .toLowerCase()
        .includes(props.searchQuerySM.toLowerCase());
    } else {
      return movie;
    }
  });

  const notSavedMovies =
    savedMovie.length === 0 && props.isChecked === false ? (
      <div className='saved-movies-cards__notFound'>
        Нет сохраненных фильмов
      </div>
    ) : (
      savedMovie.map((item) => (
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
