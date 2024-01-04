import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <div className="footer-logo">
                            <Link to={"/"}><img src="./src/assets/img/logo.svg" alt="Footer Logo" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7 col-sm-12 d-flex">
                        <div className="footer-menu">
                            <ul>
                                <Link className='link' to={"/haqqımızda"}><li>Haqqımızda</li></Link>
                                <Link className='link' to={"/texnikalar"}><li>Texnikalar</li></Link>
                                <Link className='link' to={'/blog'}><li>Blog</li></Link>
                                <Link className='link' to={'/əlaqə'}><li>Əlaqə</li></Link>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <ul>
                                <li>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</li>
                                <li>+994(51) 123 45 67</li>
                                <li>+994(12) 123 45 67</li>
                                <li>info@lmegatexnika.az</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-social">
                            <p>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</p>
                            <ul className='footer-social-list'>
                                <li>
                                    <Link to={"#"}>
                                        <img src="./src/assets/img/Group(1).svg" alt="Instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"}>
                                        <img src="./src/assets/img/Group.svg" alt="Facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"}>
                                        <img src="./src/assets/img/Vector.svg" alt="Twitter" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright d-flex justify-content-between">
                    <div className="copyright-left">
                        <p>© 2022 Megatexnika / Müəllif hüquqları</p>
                    </div>
                    <div className="copyright-right">
                        <p>Design by <span>jedai</span></p>
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer