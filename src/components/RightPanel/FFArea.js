import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFolderDoubleClick } from '../../actions';
import { deleteFileOrFolder } from '../../actions/alterfilestructure';
import FFContainer from './FFContainer';
import ModalCreate from './ModalCreate';
import ModalDetails from './ModalDetails';
import PopoverOptions from './PopoverOptions';

const FFArea = () => {
    const [selected, setSelected] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [customContextMenu, setCustomContextMenu] = useState(false)
    const [rClickPos, setRClickPos] = useState([0, 0])

    var FF = useSelector(state => state.filesystem)
    const currentPath = useSelector(state => state.currentpath)

    const dispatch = useDispatch()

    for (let i = 1; i < currentPath.length; i++) {
        FF = FF.find(o => o.name === currentPath[i]).children
    }

    useEffect(() => {
        window.addEventListener('click', () => {
            setCustomContextMenu(false)
        })
    })

    useEffect(() => {
        let modalDetails = document.getElementById("modalDetails")
        let modalCreate = document.getElementById("modalCreate")
        window.onclick = function (event) {
            if (event.target == modalDetails) {
                modalDetails.style.display = "none";
            }
            if (event.target == modalCreate) {
                modalCreate.style.display = "none";
            }
        }
    })

    const handleFFRightClick = (event, name, type) => {
        setSelected(name)
        setSelectedType(type)
        setCustomContextMenu(true)
        setRClickPos([event.clientX, event.clientY])
    }

    const handleOpen = () => {
        selectedType === 'folder' &&
            dispatch(handleFolderDoubleClick(selected))
    }

    const handleDelete = () => {
        dispatch(deleteFileOrFolder(currentPath, selected))
    }

    return (
        <div className="flex py-10 px-4 flex-wrap">
            {FF.map(item =>
                <FFContainer
                    type={item.type}
                    name={item.name}
                    selected={selected}
                    setSelected={setSelected}
                    handleFFRightClick={handleFFRightClick}
                />
            )}
            <div className="flex justify-center items-center h-32 w-28 border-dashed border-grey-250 border-4 rounded-lg cursor-pointer hover:bg-gray-100">
                <p className="text-5xl text-grey-250">+</p>
            </div>
            <ModalDetails
                show={false}
                type={"file"}
                name="index.html"
            />
            <ModalCreate
                show={false}
            />
            <PopoverOptions
                customContextMenu={customContextMenu}
                rClickPos={rClickPos}
                open={selectedType === 'folder'}
                handleOpen={handleOpen}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default FFArea;