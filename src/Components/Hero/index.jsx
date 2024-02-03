import React from 'react'
import './style.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Hero = () => {
    const { t } = useTranslation('hero')
    return (
        <div className="container">
            <div className="hero d-flex justify-content-between">
                <div className="hero-text">
                    <h1>{t('buy your heavy equipment from us')}</h1>
                    <p>{t("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled")}</p>
                    <Link to={"/haqqımızda"}> <button className='hero-btn'>{t('detailed')}</button></Link>
                </div>
                <div className="hero-img">
                    <img src="./src/assets/img/image 1.svg" alt="Hero img" />
                </div>
            </div>
        </div>
    )
}

export default Hero