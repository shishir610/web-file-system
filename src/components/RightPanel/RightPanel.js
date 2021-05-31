import React from 'react';
import Navbar from './Navbar';

const FILE_STRUCTURE = [
    {
        name: "Apps",
        type: "folder"
    },
    {
        name: "index.html",
        type: "file"
    },
]

const RightPanel = () => {
    return (
        <div className="w-3/4 h-auto p-10">
            <Navbar />
        </div>
    );
}

export default RightPanel;