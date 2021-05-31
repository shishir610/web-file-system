import React, { useEffect, useState } from 'react';
import FFContainer from './FFContainer';
import ModalCreate from './ModalCreate';
import ModalDetails from './ModalDetails';

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

    useEffect(() => {
        let modal = document.getElementById("myModal")
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })

    return (
        <div className="flex py-10 px-4">
            {FILE_STRUCTURE.map(item => <FFContainer type={item.type} name={item.name} selected={selected} setSelected={setSelected} />)}
            <div className="flex justify-center items-center h-32 w-28 border-dashed border-grey-250 border-4 rounded-lg cursor-pointer hover:bg-gray-100">
                <p className="text-5xl text-grey-250">+</p>
            </div>
            <ModalDetails
                show={false}
                type={"file"}
                name="index.html"
            />
            <ModalCreate
                show={true}
            />
        </div>
    );
}

export default FFArea;