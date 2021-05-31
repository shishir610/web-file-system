import React, { useState } from 'react';

const inputStyle = 'border-2 pl-4 rounded-xl h-12 my-2 text-grey-275 text-main w-3/4'

const ModalCreate = ({ show }) => {
    const [active, setActive] = useState("Folder")
    return show && (
        <div id="modalCreate" className="modal">
            <div className="modal-content">
                <div className="flex justify-center">
                    <p className="font-main text-lg">Create New</p>
                </div>
                <a>
                    <img src="./icons/close.svg" className="float-right -mt-6" />
                </a>
                <div className="flex justify-center py-4">
                    <div className="w-1/3 flex">
                        <div
                            className={`w-2/4 py-1 rounded-l-xl border-2 cursor-pointer ${active === "File" ? 'border-blue-200 bg-blue-200' : 'border-grey-200'}`}
                            onClick={() => setActive("File")}
                        >
                            <p className={`font-main text-md text-center ${active === "File" ? 'text-white' : 'text-black-100'}`}>File</p>
                        </div>
                        <div
                            className={`w-2/4 py-1 rounded-r-xl border-2 cursor-pointer ${active === "File" ? 'border-grey-200' : 'border-blue-200 bg-blue-200'}`}
                            onClick={() => setActive("Folder")}
                        >
                            <p className={`font-main text-md text-center ${active === "File" ? 'text-black-100' : 'text-white'}`}>Folder</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center my-6">
                    <input className={inputStyle} placeholder="Name" />
                    <input className={inputStyle} placeholder="Creator" />
                    <input className={inputStyle} placeholder="Size" />
                    <input className={inputStyle} placeholder="Date" />
                    <button className="w-3/4 bg-blue-200 h-10 my-4 rounded-xl font-main text-md text-white">
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCreate;