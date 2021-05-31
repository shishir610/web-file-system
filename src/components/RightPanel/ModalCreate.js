import React from 'react';

const ModalCreate = ({ show }) => {
    return show && (
        <div id="myModal" className="modal">
            <div className="modal-content">
                Modal Create
            </div>
        </div>
    );
}

export default ModalCreate;