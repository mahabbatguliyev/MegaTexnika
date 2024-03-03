
import React, { useEffect } from 'react'
import './style.css'
import { newsProducts } from '../ProductData.jsx'
import { useTranslation } from 'react-i18next'
import Aos from 'aos';
import 'aos/dist/aos.css'

const News = () => {
  const { t } = useTranslation('news');
  useEffect(() => {
    Aos.init({duration:3000});
},[]);
  return (
    <section id='news'>
      <div className="container">
        <div className="row">
          <div className="news-header" data-aos="fade-right" data-aos-delay="600">
            <h3>{t('news')}</h3>
          </div>
        </div>
        <div className="row">
          <div className="news-card d-flex flex-wrap">
            {newsProducts.map((item, i) =>
              <div key={i} className="news-content mt-5" data-aos="fade-up">
                <div className="col-3 col-6 col-12">
                  <img src={item.image} alt="image" />
                  <div className="news-text">
                    <h6>{item.title}</h6>
                    <p>{t('lorem Ipsum is simply dummy text of the printing and typesetting industry...')}</p>
                    <span className='date'>01.04.2022</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default News