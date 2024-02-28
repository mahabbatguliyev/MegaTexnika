import React, { useRef, useEffect } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brand = () => {
    const { t } = useTranslation('brand');
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false, 
    };

    return (
        <section id='brand'>
            <div className="container">
                <div className="brand-header">
                    <h3>{t('brand')}</h3>
                    <Slider ref={sliderRef} {...settings}>
                        <div className="brand-img">
                            <img src="./src/assets/img/image 15.svg" alt="Hyundai img" />
                        </div>
                        <div className="brand-img">
                            <img src="./src/assets/img/image 16.svg" alt="Hitachi img" />
                        </div>
                        <div className="brand-img">
                            <img src="./src/assets/img/image 17.svg" alt="Bobcat img" />
                        </div>
                        <div className="brand-img">
                            <img src="./src/assets/img/image 21.svg" alt="Komatsu img" />
                        </div>
                        <div className="brand-img">
                            <img src="./src/assets/img/image 18.svg" alt="Case img" />
                        </div>
                        <div className="brand-img">
                            <img src="./src/assets/img/image 19.svg" alt="Cat img" />
                        </div>
                        <div className="brand-img">
                            <img src="./src/assets/img/image 20.svg" alt="Liugong img" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Brand;
