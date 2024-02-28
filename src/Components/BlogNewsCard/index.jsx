import React from 'react'
import './style.css'
import { blogNews } from '../ProductData.jsx'
import { useTranslation } from 'react-i18next'
const BlogNewsCard = () => {
    const {t}=useTranslation('blogNewsCard')
    return (
        <div className="container">
            <div className="row">
                <div className="blog-news-card d-flex flex-wrap gap:10px">
                    {blogNews.map((item, i) =>
                        <div key={i} className="col-lg-3 col-md-6 col-sm-12 d-flex">
                            <div className="blog-card-content">
                                <img src={item.image} alt="News img" />
                                <div className="card-text">
                                    <h6>{t('the name of the news')}</h6>
                                    <p>12.04.2022</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BlogNewsCard