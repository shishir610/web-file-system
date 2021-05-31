import React, { useEffect, useState } from 'react';
import FFContainer from './FFContainer';
import ModalCreate from './ModalCreate';
import ModalDetails from './ModalDetails';
import PopoverOptions from './PopoverOptions';

const FILE_STRUCTURE = [
    {
        name: "Apps",
        type: "folder"
    },
    {
        name: "index.html",
        type: "file"
    },
    {
        name: "script.js",
        type: "file"
    },
]

const FFArea = () => {
    const [selected, setSelected] = useState("")
    const [customContextMenu, setCustomContextMenu] = useState(false)
    const [rClickPos, setRClickPos] = useState([0, 0])

    const handleFFRightClick = (event, name) => {
        setSelected(name)
        setCustomContextMenu(true)
        setRClickPos([event.clientX, event.clientY])
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

    return (
        <div className="flex py-10 px-4">
            {FILE_STRUCTURE.map(item =>
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
            />
        </div>
    );
}

export default FFArea;