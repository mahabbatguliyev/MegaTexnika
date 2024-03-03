import React, { useEffect } from 'react'
import './style.css'
import '../../assets/css/reset.css';
import { products } from '../ProductData.jsx';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Category = () => {
    const product = products.slice(0, 8);
    const { t } = useTranslation('category');
  
    useEffect(() => {
        Aos.init({duration:3000});
    },[]);
    return (
        <section id='category'>
            <div className="container">
                <div className="row">
                    <div className="category-header" data-aos="fade-right" data-aos-delay="600">
                        <h3>{t('categories')}</h3>
                    </div>
                </div>
                <div className="row ">
                    <div className="category-card d-flex flex-wrap" >
                    {product.map((item, i) =>
                        <div key={i} className="category-card-content" data-aos="fade-up">
                            <div className="col-12 col-6 col-3 mb-4">
                                <h3 className='text-center'>{item.productName}</h3>
                                <img src={item.image} alt={item.productName} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </section >
    )
}

export default Category