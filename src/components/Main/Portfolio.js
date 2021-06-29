import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__header'>Портфолио</h3>

      <nav>
        <ul className='portfolio__column-links'>
          <li className='portfolio__bottom'>
            <p className='portfolio__paragrph'>Статичный сайт</p>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com'
            >
              <button className='portfolio__arrow' />
            </a>
          </li>

          <li className='portfolio__bottom'>
            <p className='portfolio__paragrph'>Адаптивный сайт</p>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com'
            >
              <button className='portfolio__arrow' />
            </a>
          </li>

          <li className='portfolio__bottom'>
            <p className='portfolio__paragrph'>Одностраничное приложение</p>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com'
            >
              <button className='portfolio__arrow' />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
