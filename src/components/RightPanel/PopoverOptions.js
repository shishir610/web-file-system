import React from 'react';

const PopoverOptions = ({ customContextMenu, rClickPos }) => {
    return customContextMenu && (
        <div className="absolute bg-white rounded-lg border-2 border-grey-200" style={{ left: rClickPos[0], top: rClickPos[1] }}>
            <div className="w-40 h-11 p-2 pl-4 cursor-pointer hover:bg-grey-200">
                Open
            </div>
            <div className="w-40 h-11 p-2 pl-4 cursor-pointer hover:bg-grey-200">
                Get info
            </div>
            <div className="w-40 h-11 p-2 pl-4 text-red-500 cursor-pointer hover:bg-grey-200">
                Delete
            </div>
        </div>
    );
}

export default PopoverOptions;