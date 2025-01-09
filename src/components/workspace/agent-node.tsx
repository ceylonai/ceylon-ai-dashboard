import React from 'react';
import { Handle, Position } from 'reactflow';
import Image from 'next/image';

interface AgentNodeProps {
    data: {
        label: string;
        icon: string;
    };
}

const AgentNode: React.FC<AgentNodeProps> = ({ data }) => {
    return (
        <div
            style={{
                padding: '10px',
                borderRadius: '50%',
                backgroundColor: '#f0f8ff',
                border: '2px solid #007bff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                width: '80px',
                height: '80px',
                textAlign: 'center',
            }}
        >
            {data.icon && (
                <Image
                    src="/googlelogo.png"
                    alt="Agent Icon"
                    width={30}
                    height={30}
                />
            )}
            <Handle
                type="target"
                id="agent-target" // Unique handle ID for incoming connections
                position={Position.Left}
                className="!bg-transparent"
            />
            <Handle
                type="source"
                id="agent-source" // Unique handle ID for outgoing connections
                position={Position.Right}
                className="!bg-transparent"
            />
        </div>
    );
};

export default AgentNode;
