import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const AboutUs = () => {
    return (
        <section id='about-us'>
            <div className="about-us-nav">
                <ul>
                    <Link className='link' to={"/"}><li className='main-page'>Ana səhifə</li></Link>
                    <span className='vertical-bar'>|</span>
                    <li className='about'>Haqqımızda</li>
                </ul>
            </div>
            <div className="about-us-content">
                <h3>megaTexnika</h3>
                <p>Haqqımızda</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /> when an unknown printer took a galley of type and scrambled</p>
                <img src="./src/assets/img/image 1(1).svg" alt="About img" />
            </div>
        </section>
    )
}

export default AboutUs