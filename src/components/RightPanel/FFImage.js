import React from 'react';

const FFImage = ({ type, name }) => {
    return type === "folder" ? (
        <img src="./icons/folder.png" width="70px" />
    ) : (
        <div className="relative text-center">
            <img src="./icons/file.png" width="50px" />
            <p className="absolute bottom-1 left-1.5 text-sm text-white font-medium">.{name.split('.')[1]}</p>
        </div>
    )
}

export default FFImage;