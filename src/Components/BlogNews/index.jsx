import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Aos from 'aos';
import 'aos/dist/aos.css'
const BlogNews = () => {
    const {t}=useTranslation('blogNews');
    const {t:t2}=useTranslation('navbar');
    useEffect(() => {
        Aos.init({duration:3000});
    },[]);
    
    return (
        <div className="container">
            <div className="blog-news-navbar">
                <ul>
                    <Link className='link' to={"/"}><li className='main-page'>{t2('home')}</li></Link>
                    <span className='vertical-bar'>|</span>
                    <li className='blog'>{t2('blog')}</li>
                </ul>
            </div>
            <div className="blog-news-content d-flex justify-content-between" data-aos="fade-up">
                <div className="blog-news-left">
                    <h3>{t('innovations')}</h3>
                    <p>{t("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged")}</p>
                </div>
                <div className="blog-news-right">
                    <img src="./src/assets/img/image 93.svg" alt="Blog news image" />
                </div>
            </div>
        </div>
    )
}

export default BlogNews