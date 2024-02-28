import React from 'react'
import './style.css';
import { products } from '../ProductData.jsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Machinery = () => {
    const product = products.slice(0, 4);
const {t}=useTranslation('machinery');
    return (
        <section id='machinery'>
            <div className="container">
                <div className="row">
                    <div className="machinery-header">
                        <h3>{t('techniques')}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="machinery-card d-flex flex-wrap">
                        {product.map((item, i) =>
                            <div key={i} className="col-lg-3 col-md-6 col-sm-12 d-flex">
                                <div className="machinery-content">
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
                        )
                        }
                    </div>
                </div>
                <div className="row text-center">
                    <Link to={"/texnikalar"}><button className='machinery-btn'>{t('see all')}</button> </Link>
                </div>
            </div>
        </section>
    )
}

export default Machinery