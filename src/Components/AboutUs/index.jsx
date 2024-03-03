import React, { useEffect } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
    const { t } = useTranslation('navbar');
    const { t:t2 } = useTranslation('aboutUs');
    const { t:t3 } = useTranslation('hero');

    useEffect(() => {
        Aos.init({duration:3000});
    },[]);

    return (
        <section id='about-us'>
            <div className="about-us-nav">
                <ul>
                    <Link className='link' to={"/"}><li className='main-page'>{t('home')}</li></Link>
                    <span className='vertical-bar'>|</span>
                    <li className='about'>{t('about')}</li>
                </ul>
            </div>
            <div className="about-us-content" data-aos="fade-up">
                <h3>megaTexnika</h3>
                <p>{t2('about us')}</p>
                <p>{t3("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled")}</p>
                </div>
                <div className='about-us-img' data-aos="fade-up">

               
                <img src="./src/assets/img/image 1(1).svg" alt="About img" />
                </div>
        </section>
    );
}

export default AboutUs;