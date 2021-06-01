import React from 'react';
import FFArea from './FFArea';
import Navbar from './Navbar';

const RightPanel = () => {
    return (
        <div className="xl:w-4/5 lg:w-3/4 h-auto p-10">
            <Navbar />
            <FFArea />
        </div>
    );
}

export default RightPanel;