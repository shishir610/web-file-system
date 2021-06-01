import React, { useEffect, useState } from 'react';
import FFImage from './FFImage';

const leftStyle = "w-6/12 font-main text-right mr-1 text-black-100 text-xl"
const rightStyle = "w-6/12 font-main ml-1 text-grey-300 text-xl"

const Modal = ({ show, details, name, type, setShowModalDetails, FF }) => {
    const [sizeOfFolder, setSizeOfFolder] = useState(0)

    const computeSizeOfFolder = (children) => {
        let totalSize = 0
        for (let i = 0; i < children.length; i++) {
            if (children[i].size) {
                totalSize += children[i].size
            } else {
                computeSizeOfFolder(children[i].children)
            }
        }
        return totalSize
    }

    useEffect(() => {
        if (type === 'folder') {
            const children = FF.find(o => o.name === name).children
            setSizeOfFolder(computeSizeOfFolder(children))
        }
    }, [name])

    return show && (
        <div id="modalDetails" className="modal">
            <div className="modal-content" style={{ paddingBottom: '40px' }}>
                <div className="flex justify-center">
                    <p className="font-main text-lg">{type.charAt(0).toUpperCase() + type.slice(1)} Info</p>
                </div>
                <a onClick={() => setShowModalDetails(false)}>
                    <img src="./icons/close.svg" className="float-right -mt-6" />
                </a>
                <div className="flex justify-center my-7">
                    <FFImage type={type} name={name} />
                </div>
                {details.map(([key, value]) => {
                    return (
                        <div className="flex py-2">
                            <div className={leftStyle}>
                                {key}:
                            </div>
                            <div className={rightStyle}>
                                {value ? value : sizeOfFolder + 'kB'}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Modal;