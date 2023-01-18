import React from 'react';

const Sidebar:React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="page-game-sidebar">
        {children}
    </div>
)

export default Sidebar;