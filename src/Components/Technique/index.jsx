import { useState } from 'react'
import { products } from '../ProductData.jsx/index.jsx'
import './style.css'
const Technique = () => {
    const [items, setItems] = useState(products)

    const filterData = (title) => {
        if (title !== "Hamısı") {
            setItems(products.filter(product => product.title === title));
        } else {
            setItems(products);
        }
    };
    const lists = [
        { title: "Hamısı" },
        { title: "Ekskavatorlar" },
        { title: "Ekskavator yükləyicilər" },
        { title: "Forkliftlər" },
        { title: "Avtokranlar" },
        { title: "Qaldırıcı səbətlər" },
        { title: "Bobcat" },
        { title: "Katok" },
        { title: "Shacman" },
    ]
    return (
        <div className="container">
            <div className="technique-button text-center">
                {lists.map((list, i) => {
                    return <button key={i} className='mt-2' onClick={() => { filterData(list.title) }}>{list.title}</button>
                })}
            </div>
            <div className="row">
                <div className="technique-card d-flex flex-wrap">
                    {items.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-12 d-flex">
                            <div className="technique-card-content">
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
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Technique