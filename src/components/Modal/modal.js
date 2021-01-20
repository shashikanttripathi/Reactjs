import React from 'react';
import './modal.css'
 
const Modal = (props) => {
    const cssClasses = [
        "Modal",
        props.show ? "ModalOpen" : "ModalClosed"
      ];
    return (
        <div className={cssClasses.join(' ')}>
            <h1>Modal</h1>
            <button onClick={props.closed}>Dismiss</button>
        </div>
    );
}
 
export default Modal;