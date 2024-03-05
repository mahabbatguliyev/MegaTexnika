import React, { useMemo } from 'react'
import { useParams } from "react-router";
import { products } from "../../Components/ProductData.jsx/index.jsx";

const Detailed = () => {
    const { id } = useParams()
    const currentProduct = useMemo(() => products.find(item => item.id === id), [id])
    return (
        <div className="container">
            {currentProduct.productName} 
        </div>
      

    )
}

export default Detailed