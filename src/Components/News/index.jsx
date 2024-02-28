import React from 'react'
import './style.css'
import { newsProducts } from '../ProductData.jsx'
import { useTranslation } from 'react-i18next'
const News = () => {
  const {t}=useTranslation('news')
  return (
    <section id='news'>
      <div className="container">
        <div className="row">
          <div className="news-header">
            <h3>{t('news')}</h3>
          </div>
        </div>
        <div className="row">
          <div className="news-card d-flex flex-wrap">
            {newsProducts.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-6 col-sm-12 d-flex">
                <div className="news-content mt-5">
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