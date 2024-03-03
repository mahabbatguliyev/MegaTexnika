import { useEffect, useState } from 'react'
import { products } from '../ProductData.jsx/index.jsx'
import './style.css'
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Technique = () => {
    const { t: t2 } = useTranslation('machinery');
    const [items, setItems] = useState(products);
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
    useEffect(() => {
        Aos.init({duration:3000});
        Aos.refreshHard();
    },[]);
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
                        <div key={i} className="technique-card-content" data-aos="fade-up">
                            <div className="col-sm-12 col-md-6 col-3">
                                <img src={item.image} alt="img" />
                                <h6 className='product-name'>{t2('product name')}</h6>
                                <p>{item.productName}</p>
                                <span className='year'>{item.year}</span>
                                <div className="price">
                                    <p>{item.monthlyPrice} {t2('azn /month')}</p>
                                    <p>{item.dailyPrice} {t2('azn /day')}</p>
                                </div>
                                <button>{t2('rent it')}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Technique