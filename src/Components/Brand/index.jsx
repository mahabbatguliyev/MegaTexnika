import React from 'react'
import './style.css'
const Brand = () => {
    return (
        <section id='brand'>
            <div className="container">
                <div className="brand-header">
                    <h3>Marka</h3>
                    <div className="brand-img">
                        <ul className='brand-responsive-block '>
                            <li><img src="./src/assets/img/image 15.svg" alt="Hyundai img" /></li>
                            <li><img src="./src/assets/img/image 16.svg" alt="Hitachi img" /></li>
                            <li><img src="./src/assets/img/image 17.svg" alt="Bobcat img" /></li>
                            <li><img src="./src/assets/img/image 21.svg" alt="Komatsu img" /></li>
                            <li><img src="./src/assets/img/image 18.svg" alt="Case img" /></li>
                            <li><img src="./src/assets/img/image 19.svg" alt="Cat img" /></li>
                            <li><img src="./src/assets/img/image 20.svg" alt="Liugong img" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand