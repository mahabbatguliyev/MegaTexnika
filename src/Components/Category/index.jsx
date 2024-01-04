import React from 'react'
import './style.css'
import '../../assets/css/reset.css';
import { products } from '../ProductData.jsx';
const product = products.slice(0, 8)
const Category = () => {
    return (
        <section id='category'>
            <div className="container">
                <div className="row">
                    <div className="category-header">
                        <h3>Kateqoriyalar</h3>
                    </div>
                </div>
                <div className="row flex-wrap">
                    <div className="category-card d-flex flex-wrap">
                        {product.map((item, i) =>
                            <div key={i} className="col-lg-3 col-md-6 col-sm-12 d-flex mb-4">
                                <div className="category-card-content">
                                    <h3 className='text-center'>{item.productName}</h3>
                                    <img src={item.image} alt={item.productName} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category