import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="container">
            <div className="hero d-flex justify-content-between">
                <div className="hero-text">
                    <h1>Ağır texnikanızı bizdən satın alın</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text ever <br />since the 1500s, when an unknown printer took a galley of type and <br />scrambled</p>
                    <Link to={"/haqqımızda"}> <button className='hero-btn'>Ətraflı</button></Link>
                </div>
                <div className="hero-img">
                    <img src="./src/assets/img/image 1.svg" alt="Hero img" />
                </div>
            </div>
        </div>
    )
}

export default Hero