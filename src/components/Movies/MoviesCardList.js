import React from 'react';
// import MoviesCard from './MoviesCard';
import pic1 from '../../images/1.jpg';
import pic2 from '../../images/2.jpg';
import pic3 from '../../images/3.jpg';
import pic4 from '../../images/4.jpg';
import pic5 from '../../images/5.jpg';
import pic6 from '../../images/6.jpg';
import pic7 from '../../images/7.jpg';
import pic8 from '../../images/8.jpg';
import pic9 from '../../images/9.jpg';
import pic10 from '../../images/10.jpg';
import pic11 from '../../images/11.jpg';
import pic12 from '../../images/12.jpg';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {/* <MoviesCard /> */}
        <li className='card card__item '>
          <button className='card__like' type='button' />

          <img className='card__img' alt='#' src={pic1} />
          <div className='card__bottom'>
            <h3 className='card__title'>33 слова о дизайне</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          <button className='card__like_active' type='button' />
          <img className='card__img' alt='#' src={pic2} />
          <div className='card__bottom'>
            <h3 className='card__title'>Киноальманах «100 лет дизайна»</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic3} />
          <div className='card__bottom'>
            <h3 className='card__title'>В погоне за Бенкси</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic4} />
          <div className='card__bottom'>
            <h3 className='card__title'>Баския: Взрыв реальности</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic5} />
          <div className='card__bottom'>
            <h3 className='card__title'>Бег это свобода</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic6} />
          <div className='card__bottom'>
            <h3 className='card__title'>Книготорговцы</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic7} />
          <div className='card__bottom'>
            <h3 className='card__title'>Когда я думаю о Германии ночью</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic8} />
          <div className='card__bottom'>
            <h3 className='card__title'>
              Gimme Danger: История Игги и The Stooges
            </h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic9} />
          <div className='card__bottom'>
            <h3 className='card__title'>Дженис: Маленькая девочка грустит</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic10} />
          <div className='card__bottom'>
            <h3 className='card__title'>Соберись перед прыжком</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic11} />
          <div className='card__bottom'>
            <h3 className='card__title'>Пи Джей Харви: A dog called money</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='card card__item '>
          {/* <button className='card__like card__like_active' type='button'>
            Сохранить
          </button> */}
          <img className='card__img' alt='#' src={pic12} />
          <div className='card__bottom'>
            <h3 className='card__title'>По волнам: Искусство звука в кино</h3>
            <p className='card__timer'>1ч 17м</p>
          </div>
        </li>
      </ul>

      <div className='cards__more'>
        <button className='cards__more-button'>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
