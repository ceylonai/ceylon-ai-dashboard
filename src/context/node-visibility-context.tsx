import React, { createContext, useState, useContext, ReactNode } from 'react';

interface NodeVisibilityContextType {
    isAddNodeVisible: boolean;
    toggleAddNodeVisibility: () => void;
}

const NodeVisibilityContext = createContext<NodeVisibilityContextType | undefined>(undefined);

export const NodeVisibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAddNodeVisible, setAddNodeVisible] = useState(true);  // Initially show the Add Node button

    const toggleAddNodeVisibility = () => {
        setAddNodeVisible((prev) => !prev);  // Toggle visibility
    };

    return (
        <NodeVisibilityContext.Provider value={{ isAddNodeVisible, toggleAddNodeVisibility }}>
            {children}
        </NodeVisibilityContext.Provider>
    );
};

export const useNodeVisibility = (): NodeVisibilityContextType => {
    const context = useContext(NodeVisibilityContext);
    if (!context) {
        throw new Error('useNodeVisibility must be used within a NodeVisibilityProvider');
    }
    return context;
};