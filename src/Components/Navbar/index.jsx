import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import './style.css';


const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { t } = useTranslation('navbar');

    const [isVisible, setIsVisible] = useState(false);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 170);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleLeftSideBar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
        const barIcon = document.querySelector('.bar-icon');
        barIcon.classList.toggle('bar-icon-hover');
        const body = document.querySelector('body');
    };

    const langElement = (value, label) => {
        return { value, label };
    };

    const langs = [
        langElement('az', 'Az'),
        langElement('en', 'En'),
        langElement('ru', 'Ru'),
    ];

    const changeLang = async (key) => {
        await i18n.changeLanguage(key);
    };

    const toggleLangImageVisibility = () => {
        setLangImageVisibility(!langImageVisible);
    };


    return (
        <div className="header-bottom">
            <div className="container d-flex justify-content-between">
                <Link to={"/"}>
                    <div className="logo">
                        <img src="./src/assets/img/logo.svg" alt="Logo" />
                    </div>
                </Link>
                <div className="sidebar">
                    <nav>
                        <ul className='menu'>
                            <Link className='link' to={"/"}><li>{t('home')}</li></Link>
                            <Link className='link' to={"/haqqımızda"}><li>{t('about')}</li></Link>
                            <li className='has-submenu'>
                                {t('techniques')}
                                <img src="./src/assets/img/Vector2.svg" alt="Vector svg" />
                                <Link to={'/texnikalar'}>
                                    <ul className='submenu'>
                                        <li>{t('auto cranes')}</li>
                                        <li>{t('tractors')}</li>
                                        <li>{t('lifting baskets')}</li>
                                        <li>{t('forklifts')}</li>
                                        <li>{t('katok')}</li>
                                        <li>{t('shacman')}</li>
                                        <li>{t('bobcat')}</li>
                                        <li>{t('pump')}</li>
                                    </ul>
                                </Link>
                            </li>
                            <Link className='link' to={"/icarə şərtləri"}><li>{t('terms of lease')}</li></Link>
                            <Link className='link' to={'/blog'}><li>{t('blog')}</li></Link>
                            <Link className='link' to={"/əlaqə"}><li>{t('contact')}</li></Link>


                            {isHomePage ? <ul className='lang'>
                                {langs.map(item => (
                                    <li key={item.value} onClick={() => changeLang(item.value)}>{item.label}</li>
                                ))}

                            </ul> :
                                <div>

                                    {isVisible && (<img className='lang-img' src='./src/assets/img/Group 29.svg' alt='Language img'
                                        onMouseEnter={toggleLangImageVisibility}
                                    />) ||
                                        <ul className='lang'>
                                            {langs.map(item => (
                                                <li key={item.value} onClick={() => changeLang(item.value)}>{item.label}</li>
                                            ))}
                                        </ul>}

                                </div>

                            }
                        </ul>

                    </nav>

                    <li className='bar-icon' onClick={toggleLeftSideBar}><img src="./src/assets/img/bar.svg" alt="bar icon" /></li>


                </div>


                {isVisible && <div className="up" onClick={scrollTop}>
                    <img src="./src/assets/img/up.svg" alt="Up" />
                </div>}
            </div>
        </div>
    );
};

export default Navbar;
