import React from 'react';
import { useState, useEffect } from 'react';
import MoviesCard from './MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const [visibleMovies, setVisibleMovies] = useState(1);
  const [showMoreMovies, setShowMoreMovies] = useState(1);
  const [width] = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth]);
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth]);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return size;
  }

  useEffect(() => {
    if (width <= 480) {
      setVisibleMovies(5);
      setShowMoreMovies(2);
    } else if (width <= 768) {
      setVisibleMovies(8);
      setShowMoreMovies(2);
    } else {
      setVisibleMovies(12);
      setShowMoreMovies(3);
    }
  }, [width]);

  const showMore = () => {
    setVisibleMovies((prevVaiue) => prevVaiue + showMoreMovies);
  };

  const movie = props.movies.filter((movie) => {
    if (props.inputSQ === '') {
      return movie;
    } else if (props.isChecked === true) {
      return (
        movie.duration <= 40 &&
        movie.nameRU.toLowerCase().includes(props.inputSQ.toLowerCase())
      );
    } else if (props.isChecked === false) {
      return movie.nameRU.toLowerCase().includes(props.inputSQ.toLowerCase());
    } else {
      //eslint
      return movie;
    }
  });

  const notFoundMovies =
    movie.length === 0 ? (
      <div className='cards__notFound'>Ничего не найдено</div>
    ) : (
      movie
        .slice(0, visibleMovies)
        .map((item) => (
          <MoviesCard
            key={item.id}
            movie={item}
            alt={item.nameRU}
            src={item.image.url}
            nameRU={item.nameRU}
            duration={item.duration}
            trailerLink={item.trailerLink}
            onMovieSave={props.onMovieSave}
            savedMovies={props.savedMovies}
            onMovieSaveDelete={props.onMovieSaveDelete}
          />
        ))
    );

  return (
    <section className='cards'>
      <ul className='cards__list'>{notFoundMovies}</ul>
      <div className='cards__more'>
        {visibleMovies < movie.length && (
          <button className='cards__more-button' onClick={showMore}>
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
