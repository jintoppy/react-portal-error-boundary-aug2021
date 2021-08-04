/* eslint-disable */
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {

    return createPortal((
        <div className="modal">
            <div className="modal-body">                
                {childrn}
            </div>
        </div>
    ), document.querySelector('#separate'))
}

export default Modal;

/* eslint-enable */