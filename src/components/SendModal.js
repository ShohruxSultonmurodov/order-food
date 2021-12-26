import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function SendModal({setIsOpenModal, isOpenModal, setIsOpenFinalModal}) {
    const [number, setNumber] = useState('');
    const [adress, setAdress] = useState('');
    function toggleModal(){
        setIsOpenModal(p=>!p);
        setIsOpenFinalModal(p=>!p);
    }
    return (
        <Modal isOpen={isOpenModal} toggle={toggleModal} >
            <ModalHeader>
                Buyurtmani yetkazib berishimiz uchun telefon raqam va manzilni kiriting.
            </ModalHeader>
            <ModalBody>
                <form>
                    <input value={number} onChange={(e)=>setNumber(e.target.value)} className='form-control my-2' placeholder='Telefon raqamingizni kiriting' type='number' />
                    <input value={adress} onChange={(e)=>setAdress(e.target.value)}  className='form-control my-2' placeholder='Manzilingizni kiriting' type='text' />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className='btn mx-2 btn-danger' onClick={()=>setIsOpenModal(p=>!p)}>Yopish</button>
                <button disabled={!number || !adress} className='btn  mx-2 btn-success' onClick={toggleModal}>Jo'natish</button>
            </ModalFooter>
        </Modal>
    )
}

export default SendModal;