import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className="not-found">
            <h1 className="not-found__block">
                <span className='not-found__number'>404</span>
                <p className='not-found__text'>Страница не найдена</p>
            </h1>

            <Link className='not-found__link-back' to="/">Назад</Link>
        </div>
    );
}

export default PageNotFound;