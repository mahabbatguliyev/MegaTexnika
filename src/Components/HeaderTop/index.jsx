import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const HeaderTop = () => {
    return (
        <div className='header-top'>
            <div className="container d-flex justify-content-between">
                <div className="ht-left">
                    <div className="address">
                        <span>+994(12) 123 45 67</span>
                        <span className='vertical-bar'>|</span>
                        <span>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</span>
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