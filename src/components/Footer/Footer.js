import React from 'react';
import { Route } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const footerBlock = (
    <section className='footer'>
      <div className='footer__up'>
        <p className='footer__paragrph'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>

      <div className='footer__bottom'>
        <p className='footer__date'>&copy;{`${new Date().getFullYear()}`}</p>

        <nav class='footer__column'>
          <ul class='footer__column-links'>
            <li class='footer__item'>
              <a
                class='footer__column-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://praktikum.yandex.ru'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li class='footer__item'>
              <a
                class='footer__column-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com'
              >
                Github
              </a>
            </li>
            <li class='footer__item'>
              <a
                class='footer__column-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com'
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );

  return (
    <>
      <Route exact path='/'>
        {footerBlock}
      </Route>
      <Route path='/movies'>{footerBlock}</Route>
      <Route path='/saved-movies'>{footerBlock}</Route>
    </>
  );
}

export default Footer;
