import React from 'react';
import FFImage from './FFImage';

const Modal = ({ show, type, name, size, creator, date }) => {
    return show && (
        <div id="modalDetails" className="modal">
            <div className="modal-content">
                <div className="flex justify-center">
                    <p className="font-main text-lg">{type.charAt(0).toUpperCase() + type.slice(1)} Info</p>
                </div>
                <a>
                    <img src="./icons/close.svg" className="float-right -mt-6" />
                </a>
                <div className="flex justify-center my-7">
                    <FFImage type={type} name={name} />
                </div>
                <div className="flex">
                    <div className="w-6/12 font-main text-right mr-1 text-black-100 text-lg">
                        Name:
                    </div>
                    <div className="w-6/12 font-main ml-1 text-grey-300 text-lg">
                        Shishir
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;