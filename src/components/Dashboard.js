import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel'

const Dashboard = () => {
    return (
        <div className="min-w-full min-h-screen	flex">
            <LeftPanel />
            <RightPanel />
        </div>
    );
}

export default Dashboard;