import React from 'react'
import './style.css'
import { newsProducts } from '../ProductData.jsx'
const News = () => {
  return (
    <section id='news'>
      <div className="container">
        <div className="row">
          <div className="news-header">
            <h3>Yeniliklər</h3>
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
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