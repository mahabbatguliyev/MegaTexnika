import React, { useEffect } from 'react'
import './style.css'
import { blogNews } from '../ProductData.jsx'
import { useTranslation } from 'react-i18next'
import Aos from 'aos';
import 'aos/dist/aos.css'
const BlogNewsCard = () => {
    const { t } = useTranslation('blogNewsCard');
    useEffect(() => {
        Aos.init({duration:3000});
    },[]);
    
    return (
        <div className="container">
            <div className="row">
                <div className="blog-news-card d-flex flex-wrap">
                    {blogNews.map((item, i) =>
                        <div key={i} className="blog-card-content" data-aos="fade-up">
                            <div className="col-3 col-6 col-12">
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