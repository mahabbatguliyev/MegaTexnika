import { Link, useLocation } from 'react-router-dom';
import './style.css';
import i18n from "i18next";
import {useTranslation} from "react-i18next";
const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const {t} = useTranslation('navbar')

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleLeftSideBar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
        const barIcon = document.querySelector('.bar-icon');
        barIcon.classList.toggle('bar-icon-hover');
        const body = document.querySelector('body');
        body.classList.toggle('sidebar-open');
    };

    const langElement = (value,label) => {
        return {value,label}
    }

    const langs = [
        langElement('az','Az'),
        langElement('en','En'),
        langElement('ru','Ru'),
    ]

    const changeLang = async (key) => {
        await i18n.changeLanguage(key)
    }

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
                                Texnikalar
                                <img src="./src/assets/img/Vector2.svg" alt="Vector svg" />
                                <Link to={'/texnikalar'}>
                                    <ul className='submenu'>
                                        <li>Avtokranlar</li>
                                        <li>Traktorlar</li>
                                        <li>Qaldırıcı səbətlər</li>
                                        <li>Forkliftlər</li>
                                        <li>Katok</li>
                                        <li>Shacman</li>
                                        <li>Bobcat</li>
                                        <li>Pompa</li>
                                    </ul>
                                </Link>
                            </li>
                            <Link className='link' to={"/icarə şərtləri"}><li>İcarə şərtləri</li></Link>
                            <Link className='link' to={'/blog'}><li>Blog</li></Link>
                            <Link className='link' to={"/əlaqə"}><li>Əlaqə</li></Link>
                        </ul>
                    </nav>
                    <li className='bar-icon' onClick={toggleLeftSideBar}><img src="./src/assets/img/bar.svg" alt="bar icon" /></li>
                </div>

                {isHomePage ? <ul className='lang'>
                    {langs.map(item => (
                        <li key={item.value} onClick={() => changeLang(item.value)}>{item.label}</li>
                    ))}
                </ul> :
                    <img className='lang-img' src='./src/assets/img/Group 29.svg' alt='Language img'
                    />
                }
                <div onClick={scrollTop} className="up">
                    <img src="./src/assets/img/up.svg" alt="Up" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
