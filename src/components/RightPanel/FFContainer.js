import React from 'react';
import FFImage from './FFImage';

const FFContainer = ({ type, name, selected, setSelected, handleFFRightClick }) => {
    return (
        <div
            className={`w-28 h-30 mr-12 mb-12 flex flex-col justify-center items-center rounded-lg ${selected === name && 'bg-blue-100'}`}
            onClick={() => setSelected(name)}
            // onMouseDown={(event) => {
            //     handleFFRightClick(event, name)
            // }}
            onContextMenu={event => {
                event.preventDefault()
                handleFFRightClick(event, name)
            }}
        >
            <div style={{ height: '80px' }} className="flex items-end mb-2">
                <FFImage type={type} name={name} />
            </div>
            <div>
                <p className="font-main text-black-100 py-2">{name}</p>
            </div>
        </div>
    );
}

export default FFContainer;