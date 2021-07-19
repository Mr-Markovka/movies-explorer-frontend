import React from 'react';

import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project'>
      <div className='project__bottom'>
        <h3 className='project__header' id={'about'}>
          О проекте
        </h3>
      </div>

      <div className='project__text-block'>
        <div className='project__text-block-set'>
          <h3 className='project__text-header'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='project__text-paragrph'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__text-block-set'>
          <h3 className='project__text-header'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__text-paragrph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className='project__tracker-block'>
        <div className='project__tracker-left'>
          <p className='project__tracker-paragrph_up'>1 неделя</p>
        </div>
        <div className='project__tracker-right'>
          <p className='project__tracker-paragrph_up'>4 недели</p>
        </div>
      </div>

      <div className='project__tracker-block'>
        <div className='project__tracker-text-left'>
          <p className='project__tracker-paragrph_down'>Back-end</p>
        </div>
        <div className='project__tracker-text-right'>
          <p className='project__tracker-paragrph_down'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
