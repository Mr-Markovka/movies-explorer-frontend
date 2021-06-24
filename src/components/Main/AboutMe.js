import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className='student'>
      <div className='student__bottom'>
        <h3 className='student__header'>Студент</h3>
      </div>

      <div className='student__content-block'>
        <div className='student__text-block'>
          <h3 className='student__text-header'>Игнат</h3>
          <p className='student__paragrph'>Фронтенд-разработчик, 32 года</p>
          <p className='student__paragrph-text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>

          <ul class='student__links'>
            <li class='student__item'>
              <a
                class='student__link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com'
              >
                Facebook
              </a>
            </li>
            <li class='student__item'>
              <a
                class='student__link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className='student__img-block'>
          <img className='student__img' alt='Фото автора.' src={photo} />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
