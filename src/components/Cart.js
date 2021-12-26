import React from "react";
import CartItem from "./CartItem";
import empty from '../img/empty.gif'

function Cart({isOpen,setIsOpen, selectProducts, changeQuantity, amount, deleteToCart, setIsOpenModal}) {
    function send() {
        setIsOpenModal(p=>!p);
        setIsOpen(p=>!p);
    }
    return(
        <div className={`my-cart ${isOpen?'open-cart':''}`}>
            <h1 className="cart-title">Sizning savatchangiz</h1>
            {
                selectProducts.length>0
                ?
                <div className="choices">
                    <div >
                        {
                            selectProducts.map(item=>{
                                return <CartItem deleteToCart={deleteToCart} changeQuantity={changeQuantity} key={item.id} data={item} />
                            })
                        }
                    </div>
                </div>
                :
                <div className="empty">
                    <img src={empty} />
                </div>
            }
            {
                selectProducts.length>0
                ?
                <div className="cart-footer">
                    <h2 className="amount"><span>Jami hisob:</span> {amount.toFixed(2)} UZS</h2>
                    <button onClick={send} className="order-btn">Buyurtma berish</button>
                </div>:''
            }
        </div>
    )
}

export default Cart;