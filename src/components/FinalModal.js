import React from 'react';
import {Modal, ModalHeader, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function FinalModal({setIsOpenFinalModal, isOpenFinalModal}) {
    function toggleModal(){
        setIsOpenFinalModal(p=>!p);
    }
    return (
        <Modal isOpen={isOpenFinalModal} toggle={toggleModal} >
            <ModalHeader>
                Buyurtmangiz qabul qilindi tez orada yetkazib beramiz
            </ModalHeader>
            <ModalFooter>
                <button className='btn btn-danger' onClick={toggleModal}>Yopish</button>
            </ModalFooter>
        </Modal>
    )
}
export default FinalModal;