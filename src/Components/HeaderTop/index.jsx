import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const HeaderTop = () => {
    const { t } = useTranslation('footer')
    return (
        <div className='header-top'>
            <div className="container d-flex justify-content-between">
                <div className="ht-left">
                    <div className="address">
                        <span>+994(12) 123 45 67</span>
                        <span className='vertical-bar'>|</span>
                        <span>{t('fatali Khan Khoyski 111A, Baku Azerbaijan')}</span>
                    </div>
                </div>
                <div className="ht-right">
                    <ul>
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
    )
}

export default HeaderTop