import React from 'react';

const PopoverOptions = ({ customContextMenu, rClickPos, open, handleOpen, handleGetInfo, handleDelete }) => {
    return customContextMenu && (
        <div className="absolute bg-white rounded-lg border-2 border-grey-200" style={{ left: rClickPos[0], top: rClickPos[1] }}>
            {open && (
                <div className="w-40 h-11 p-2 pl-4 cursor-pointer hover:bg-grey-200" onClick={handleOpen}>
                    Open
                </div>
            )}
            <div className="w-40 h-11 p-2 pl-4 cursor-pointer hover:bg-grey-200" onClick={handleGetInfo}>
                Get info
            </div>
            <div className="w-40 h-11 p-2 pl-4 text-red-500 cursor-pointer hover:bg-grey-200" onClick={handleDelete}>
                Delete
            </div>
        </div>
    );
}

export default PopoverOptions;