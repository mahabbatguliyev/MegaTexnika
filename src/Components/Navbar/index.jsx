import { Link, useLocation } from 'react-router-dom';
import './style.css';
const Navbar = () => {
    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    const loacation = useLocation();
    const isHomePage = loacation.pathname === '/'
    function toggleLeftSideBar() {

        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active')
        const barIcon = document.querySelector('.bar-icon');
        barIcon.classList.toggle('bar-icon-hover')
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
                            <Link className='link' to={"/"}><li>Əsas səhifə</li></Link>
                            <Link className='link' to={"/haqqımızda"}> <li>Haqqımızda</li></Link>
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
                    <li className='bar-icon' onClick={toggleLeftSideBar}><img src="./src/assets/img/bar.svg" alt="" /></li>
                </div>
                {isHomePage ? <ul className='lang'>
                    <li>Az|</li>
                    <li>En</li>
                    <li>|Ru</li>
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
