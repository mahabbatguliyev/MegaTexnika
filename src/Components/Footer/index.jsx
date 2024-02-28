import React, { useTransition } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Footer = () => {
    const { t } = useTranslation('footer');
    const { t: t2 } = useTranslation('navbar');
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
                                <Link className='link' to={"/haqqımızda"}><li>{t2('about')}</li></Link>
                                <Link className='link' to={"/texnikalar"}><li>{t2('techniques')}</li></Link>
                                <Link className='link' to={"/texnikalar"}><li>{t2('terms of lease')}</li></Link>
                                <Link className='link' to={'/blog'}><li>{t2('blog')}</li></Link>
                                <Link className='link' to={'/əlaqə'}><li>{t2('contact')}</li></Link>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <ul>
                                <li>{t('fatali Khan Khoyski 111A, Baku Azerbaijan')}</li>
                                <li>+994(51) 123 45 67</li>
                                <li>+994(12) 123 45 67</li>
                                <li>info@lmegatexnika.az</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-social">
                            <p>{t('schedule (our working hours): Mon-Sat. 10:00 - 19:00')}</p>
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
                        <p>{t('© 2022 Megatechnika / Copyright')}</p>
                    </div>
                    <div className="copyright-right">
                        <p>{t('design by')} <span>jedai</span></p>
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer