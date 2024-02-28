import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const TechniqueTop = () => {
    const { t } = useTranslation('navbar');
    return (
        <div className="container">
            <div className="technique-nav">
                <ul>
                    <Link className='link' to={"/"}><li className='main-page'>{t('home')}</li></Link>
                    <span className='vertical-bar'>|</span>
                    <li className='technique'>{t('techniques')}</li>
                </ul>
            </div>
            <div className="technique-header">
                <div className="row text-center">
                    <h2>{t('techniques')}</h2>
                </div>
            </div>
        </div>
    )
}

export default TechniqueTop