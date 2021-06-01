import React from 'react';
import FFArea from './FFArea';
import Navbar from './Navbar';

const RightPanel = () => {
    return (
        <div className="w-4/5 h-auto p-10">
            <Navbar />
            <FFArea />
        </div>
    );
}

export default RightPanel;