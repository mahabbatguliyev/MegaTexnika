import React from 'react'
import './style.css';
import { products } from '../ProductData.jsx';
import { Link } from 'react-router-dom';
const product = products.slice(0, 4);
const Machinery = () => {
    return (
        <section id='machinery'>
            <div className="container">
                <div className="row">
                    <div className="machinery-header">
                        <h3>Texnikalar</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="machinery-card d-flex flex-wrap">
                        {product.map((item, i) =>
                            <div key={i} className="col-lg-3 col-md-6 col-sm-12 d-flex">
                                <div className="machinery-content">
                                    <img src={item.image} alt="img" />
                                    <h6 className='product-name'>Məhsulun adı</h6>
                                    <p>{item.productName}</p>
                                    <span className='year'>{item.year}</span>
                                    <div className="price">
                                        <p>{item.monthlyPrice} AZN /ay</p>
                                        <p>{item.dailyPrice} AZN /gün</p>
                                    </div>
                                    <button>İcarə et</button>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
                <div className="row text-center">
                    <Link to={"/texnikalar"}><button className='machinery-btn'>Hamısına bax</button> </Link>
                </div>
            </div>
        </section>
    )
}

export default Machinery