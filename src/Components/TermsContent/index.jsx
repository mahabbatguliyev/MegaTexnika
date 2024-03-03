import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Aos from 'aos';
import 'aos/dist/aos.css';
const TermsContent = () => {
    const {t}=useTranslation('terms');
    const {t:t2}=useTranslation('navbar');
    useEffect(() => {
        Aos.init({duration:3000});
    },[]);
    return (
        <div className="container">
            <div className="terms-navbar">
                <ul>
                    <Link className='link' to={"/"}><li className='main-page'>{t2('home')}</li></Link>
                    <span className='vertical-bar'>|</span>
                    <li className='terms'>{t2('terms of lease')}</li>
                </ul>
            </div>
            <div className="terms-content d-flex" data-aos="fade-right">
                <div className="terms-content-left">
                    <h3>{t2('terms of lease')}</h3>
                    <div className="terms-left-img">
                        <img src="./src/assets/img/image 91.svg" alt="Terms img" />
                    </div>
                </div>
                <div className="terms-right" data-aos="fade-left">
                    <div className="terms-right-img">
                        <img src="./src/assets/img/image 90.svg" alt="Terms img" />
                    </div>
                    <div className="terms-right-text">
                        <p>{t("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsContent