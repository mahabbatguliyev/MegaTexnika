import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const TechniqueTop = () => {
    return (
        <div className="container">
            <div className="technique-nav">
                <ul>
                    <Link className='link' to={"/"}><li className='main-page'>Ana səhifə</li></Link>
                    <span className='vertical-bar'>|</span>
                    <li className='technique'>Texnikalar</li>
                </ul>
            </div>
            <div className="technique-header">
                <div className="row text-center">
                    <h2>Texnikalar</h2>
                </div>
            </div>
        </div>
    )
}

export default TechniqueTop