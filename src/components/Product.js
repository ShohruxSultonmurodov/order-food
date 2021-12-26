import React from "react";

function Product({productInfo, addToCart}) {
    return <div className="product">
        <img src={productInfo.imgUrl} />
        <h2 className="title">{productInfo.title}</h2>
        <p className="description">{productInfo.description}</p>
        <h3 className="price">{productInfo.price} UZS</h3>
        <button onClick={()=>addToCart(productInfo)}>Savatchaga qo'shish</button>
    </div>
}

export default Product;