// Machinery.jsx

import React, { useEffect } from 'react';
import './style.css';
import { products } from '../ProductData.jsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Machinery = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const product = products.slice(0, 4);
    const { t } = useTranslation('machinery');

    return (
        <section id='machinery'>
            <div className="container">
                <div className="row">
                    <div className="machinery-header" data-aos="fade-right" data-aos-delay="600">
                        <h3>{t('techniques')}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="machinery-card d-flex flex-wrap">
                        {product.map((item, i) => (
                            <div key={i} className="machinery-content" data-aos="fade-up">
                                <div className="col-12 col-6 col-3">
                                    <img src={item.image} alt="img" />
                                    <h6 className='product-name'>{t('product name')}</h6>
                                    <p>{item.productName}</p>
                                    <span className='year'>{item.year}</span>
                                    <div className="price">
                                        <p>{item.monthlyPrice} {t('azn /month')}</p>
                                        <p>{item.dailyPrice} {t('azn /day')}</p>
                                    </div>
                                    <button>{t('rent it')}</button> 
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row text-center">
                    <Link to={'/texnikalar'}>
                        <button className='machinery-btn'>{t('see all')}</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Machinery;
