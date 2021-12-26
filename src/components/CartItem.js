import React from "react";
import cancel from '../img/cancel.png'
function CartItem({data, changeQuantity, deleteToCart}) {
    return (
        <div className="cart-item">
            <img src={data.imgUrl} />
            <div className="title-price">
                <h3>{data.title}</h3>
                <h4> {data.price} <span>UZS</span></h4>
            </div>
            <div className="quantity">
                <button onClick={()=>changeQuantity(data, false)}>-</button>
                <span>{data.quantity}</span>
                <button onClick={()=>changeQuantity(data, true)}>+</button>
            </div>
            <div onClick={()=>deleteToCart(data)} className="delete">
                <img src={cancel} />
            </div>
        </div>
    )
}

export default CartItem;