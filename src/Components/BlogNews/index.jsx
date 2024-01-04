import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const BlogNews = () => {
    return (
        <div className="container">
            <div className="blog-news-navbar">
                <ul>
                    <Link className='link' to={"/"}><li className='main-page'>Ana səhifə</li></Link>
                    <span className='vertical-bar'>|</span>
                    <li className='blog'>Blog</li>
                </ul>
            </div>
            <div className="blog-news-content d-flex justify-content-between">
                <div className="blog-news-left">
                    <h3>Yeniliklər</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of type <br /> and scrambled it to make a type specimen book. It has survived not only <br /> five centuries, but also the leap into electronic typesetting, remaining <br /> essentially unchanged</p>
                </div>
                <div className="blog-news-right">
                    <img src="./src/assets/img/image 93.svg" alt="Blog news image" />
                </div>
            </div>
        </div>
    )
}

export default BlogNews