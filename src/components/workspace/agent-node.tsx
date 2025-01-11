'use client';
import React from 'react';
import { Handle, Position } from 'reactflow';
import { Bot, Brain, Search, MessageSquare, Plus } from 'lucide-react';

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
                position: 'relative', // Set position to relative to allow positioning of the button
            }}
        >
            {data.icon && (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {data.icon === 'bot' && <Bot className="h-5 w-5" />}
                    {data.icon === 'search' && <Search className="h-5 w-5" />}
                    {data.icon === 'brain' && <Brain className="h-5 w-5" />}
                    {data.icon === 'pen' && <MessageSquare className="h-5 w-5" />}
                </div>
            )}

            {/* Badge Styled as a Button */}
            <div
                style={{
                    position: 'absolute',
                    top: '5px', // Position the badge at the top-right of the node
                    right: '0px',  // Adjust for the right side
                    padding: '4px',
                    borderRadius: '50%', // Make it rounded like a badge
                    backgroundColor: '#007bff',
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }}
                onClick={() => alert('Badge Clicked')}
            >
                <Plus className="h-4 w-4" />
            </div>

            {/* Handles for connections */}
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
