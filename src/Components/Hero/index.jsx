import React, { useEffect } from 'react'
import './style.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Hero = () => {
    const { t } = useTranslation('hero');
    useEffect(() => {
        Aos.init({duration:3000});
    },[]);
    return (
        <div className="container">
            <div className="hero d-flex justify-content-between" data-aos="fade-up">
                <div className="hero-text">
                    <h1 className="">{t('buy_your_heavy_equipment_from_us')}</h1>
                    <p className="">{t("lorem_Ipsumis_simply_dummy_text_of_the_printing_and_typesetting_industry._Lorem_Ipsum_has_been_the_industry's_standard_dummy_text_ever_since_the_1500s,_when_an_unknown_printer_took_a_galley_of_type_and_scrambled")}</p>
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