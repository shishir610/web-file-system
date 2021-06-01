import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFileOrFolder } from '../../actions';

const inputStyle = 'border-2 pl-4 rounded-xl h-12 my-2 text-grey-275 text-main w-3/4'
const initState = {
    "name": "",
    "creator": "",
    "size": null,
    "date": "",
    "type": "folder"
}

const ModalCreate = ({ show, setShowModalCreate }) => {
    const [newFileDetails, setNewFileDetails] = useState(initState)
    const dispatch = useDispatch()
    const currentPath = useSelector(state => state.currentpath)

    const handleInputChange = (event) => {
        switch (event.target.id) {
            case "name":
                setNewFileDetails({
                    ...newFileDetails,
                    "name": event.target.value
                })
                break
            case "creator":
                setNewFileDetails({
                    ...newFileDetails,
                    "creator": event.target.value
                })
                break
            case "size":
                setNewFileDetails({
                    ...newFileDetails,
                    "size": event.target.value
                })
                break
            case "date":
                setNewFileDetails({
                    ...newFileDetails,
                    "date": event.target.value
                })
                break
        }
    }

    return show && (
        <div id="modalCreate" className="modal">
            <div className="modal-content">
                <div className="flex justify-center">
                    <p className="font-main text-lg">Create New</p>
                </div>
                <a>
                    <img src="./icons/close.svg" className="float-right -mt-6" onClick={() => setShowModalCreate(false)} />
                </a>
                <div className="flex justify-center py-4">
                    <div className="w-1/3 flex">
                        <div
                            className={`w-2/4 py-1 rounded-l-xl border-2 cursor-pointer ${newFileDetails['type'] === "file" ? 'border-blue-200 bg-blue-200' : 'border-grey-200'}`}
                            onClick={() => setNewFileDetails({ ...newFileDetails, "type": 'file' })}
                        >
                            <p className={`font-main text-md text-center ${newFileDetails['type'] === "file" ? 'text-white' : 'text-black-100'}`}>File</p>
                        </div>
                        <div
                            className={`w-2/4 py-1 rounded-r-xl border-2 cursor-pointer ${newFileDetails['type'] === "file" ? 'border-grey-200' : 'border-blue-200 bg-blue-200'}`}
                            onClick={() => setNewFileDetails({ ...newFileDetails, "type": 'folder' })}
                        >
                            <p className={`font-main text-md text-center ${newFileDetails['type'] === "file" ? 'text-black-100' : 'text-white'}`}>Folder</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center my-6">
                    <input className={inputStyle}
                        placeholder="Name"
                        id="name"
                        onChange={event => handleInputChange(event)}
                        value={newFileDetails["name"]}
                    />

                    <input className={inputStyle}
                        placeholder="Creator"
                        id="creator"
                        onChange={event => handleInputChange(event)}
                        value={newFileDetails["creator"]}
                    />

                    {newFileDetails['type'] === 'file' &&
                        <input className={inputStyle}
                            placeholder="Size (Number in kB)"
                            id="size"
                            onChange={event => handleInputChange(event)}
                            value={newFileDetails["size"]}
                        />
                    }

                    <input className={inputStyle}
                        placeholder="Date (DD-MM-YYYY)"
                        id="date"
                        onChange={event => handleInputChange(event)}
                        value={newFileDetails["date"]}
                    />

                    <button
                        className="w-3/4 bg-blue-200 h-10 my-4 rounded-xl font-main text-md text-white"
                        onClick={() => {
                            dispatch(addFileOrFolder(currentPath, newFileDetails))
                            setShowModalCreate(false)
                            setNewFileDetails(initState)
                        }}
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCreate;