import React,{useState, useEffect}  from 'react';
import products from './data/foods.json';
import './App.css';
import Header from './components/Header';
import ActiveProducts from './components/ActiveProducts';
import {Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import SendModal from './components/SendModal';
import FinalModal from './components/FinalModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

function App() {
  const [activeProducts, setActiveProducts] = useState(products.kebab);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenFinalModal, setIsOpenFinalModal] = useState(false);
  const [selectProducts, setSelectProducts] = useState([]);
  const [amount, setAmount] = useState(0);
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('selectProducts'))) {
      setSelectProducts(JSON.parse(localStorage.getItem('selectProducts')))
    }else {
      setSelectProducts([]);
    }
    setAmount(Number(localStorage.getItem('amount')))
  }, []);
  function addToCart(item) {
    const selectProducts1 = [...selectProducts];
    let amount1 = amount;
    if(!selectProducts1.includes(item)) {
      selectProducts1.push(item);
    }
    const index = selectProducts1.indexOf(item);
    selectProducts1[index].quantity++;
    amount1+=selectProducts1[index].price;
    setAmount(amount1);
    setSelectProducts(selectProducts1);
    localStorage.setItem('amount', String(amount1));
    localStorage.setItem("selectProducts", JSON.stringify(selectProducts1));
    toast.success("Mahsulot savatchaga qo'shildi");
  }
  function changeQuantity(item, isInc){
    const selectProducts1 = [...selectProducts];
    let amount1 = amount;
    const i = selectProducts1.indexOf(item);
    if(isInc) {
      selectProducts1[i].quantity++;
      amount1+=selectProducts1[i].price;
      setAmount(amount1);
    }else {
      if(selectProducts1[i].quantity>1) {
        selectProducts1[i].quantity--;
        amount1-=selectProducts1[i].price;
        setAmount(amount1);
      }else {
        selectProducts1[i].quantity=1;
      }
    }
    localStorage.setItem('amount', String(amount1));
    localStorage.setItem('selectProducts', JSON.stringify(selectProducts1))
    setSelectProducts(selectProducts1);
  }
  function deleteToCart(item) {
    const selectProducts1 = [...selectProducts];
    let amount1 = amount;
    const i = selectProducts1.indexOf(item);
    amount1-=selectProducts1[i].quantity*selectProducts1[i].price;
    selectProducts1[i].quantity=0;
    selectProducts1.splice(i,1);
    localStorage.setItem('selectProducts', JSON.stringify(selectProducts1));
    localStorage.setItem('amount', String(amount1));
    setAmount(amount1);
    setSelectProducts(selectProducts1);
  }
  return (
    <div>
      <Header setIsOpen={setIsOpen} setActiveProducts={setActiveProducts} products={products} />
      <Cart setIsOpenModal={setIsOpenModal} setIsOpen={setIsOpen} amount={amount} deleteToCart={deleteToCart} changeQuantity={changeQuantity} selectProducts={selectProducts} isOpen={isOpen} />
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'product/:title'} element={<ActiveProducts  activeProducts={activeProducts} addToCart={addToCart} />}/>
      </Routes>
      <SendModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} setIsOpenFinalModal={setIsOpenFinalModal}/>
      <FinalModal isOpenFinalModal={isOpenFinalModal} setIsOpenFinalModal={setIsOpenFinalModal} />
      <ToastContainer />
    </div>
  );
}

export default App;
