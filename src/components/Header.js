import React, {useState} from "react";
import logo from '../img/logo.png';
import cart from '../img/shopping-cart.png';
import menu from '../img/menu.png';
// import shopCartBtn from "./svg/shopCart";
import {Link} from 'react-router-dom';
function Header({products, setActiveProducts, setIsOpen}) {
    const [showMenu, setShowMenu] = useState(false);
    return( 
        <div className="header">
            <div className="logo">
                <Link to={'/'}>
                    <img src={logo} className="logo-img" />
                </Link>
            </div>
            <div className={`header-menu ${showMenu?'active-menu':''}`}>
                <Link  to={'product/kebab'}>
                    <button onClick={()=>setActiveProducts(products.kebab)}>Shashlik</button>
                </Link>
                <Link to={'product/national'}>
                    <button onClick={()=>setActiveProducts(products.national)}>Milliy taomlar</button>
                </Link>
                <Link to={'product/pizza'}>
                    <button onClick={()=>setActiveProducts(products.pizza)}>Pitsa</button>
                </Link>
                <Link to={'product/drink'}>
                    <button onClick={()=>setActiveProducts(products.drink)}>Ichimlik</button>
                </Link>
                <Link to={'product/desert'}>
                    <button onClick={()=>setActiveProducts(products.desert)}>Desert</button>
                </Link>
            </div>
            <div className="btns">
                <div onClick={()=>setShowMenu(p=>!p)} className="show-menu">
                    <img src={menu} />
                </div>
                <div onClick={()=>setIsOpen(p=>!p)} className="cart">
                    <img src={cart} className="cart-img" />
                </div>
            </div>
            
        </div>
    )
}

export default Header;