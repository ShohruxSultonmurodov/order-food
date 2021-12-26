import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import Product from "./Product";

function ActiveProducts({activeProducts, addToCart }) {
    const {title} = useParams();
    const [productTitle, setProductTitle] = useState('Shashliklar')
    useEffect(()=>{
        if(title=='kebab') {
            setProductTitle('Shashliklar')
        }else if(title=='national') {
            setProductTitle('Milliy taomlar')
        }else if(title=='pizza') {
            setProductTitle('Pitsalar')
        }else if(title=='drink') {
            setProductTitle('Ichimliklar')
        }else if(title=='desert'){
            setProductTitle('Desertlar')
        }else{
            setProductTitle('Shashliklar')
        }
    }, [title]);
    
    return <div>
        <h1 className="product-title">{productTitle}</h1>

        <div className="products">
            {
                activeProducts.map(product=>{
                    return <Product key={product.id} productInfo={product} addToCart={addToCart} />
                })
            }
        </div>
    </div>
}

export default ActiveProducts;