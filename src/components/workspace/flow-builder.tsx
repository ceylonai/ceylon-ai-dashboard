'use client'

import { useCallback, useState, useEffect } from 'react'
import AgentNode from "@/components/workspace/agent-node";
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    NodeTypes,
    BackgroundVariant,
} from 'reactflow'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SidebarProvider } from '@/components/ui/sidebar'
import AddNode from './add-node'
import { AgentSelectorDialog } from './agent-selector-dialog'
import { AIAgent, CustomNode } from '@/type/flow'
import 'reactflow/dist/style.css'

const nodeTypes: NodeTypes = {
    addNode: AddNode,
    agentNode: AgentNode,
};

const initialNodes: CustomNode[] = [
    {
        id: '1',
        type: 'addNode',
        position: { x: 400, y: 300 },
        data: { label: 'Add Agent' },
    },
];

export default function FlowBuilder() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const onNodeClick = useCallback((event: React.MouseEvent, node: any) => {
        const customNode = node as CustomNode;
        if (customNode.type === 'addNode') {
            setSelectedNode(customNode.id);
            setDialogOpen(true);
        }
    }, []);

    const handleSelectAgent = useCallback(
        (agent: AIAgent) => {
            if (selectedNode) {
                const selectedNodeData = nodes.find((n) => n.id === selectedNode);
                if (selectedNodeData) {
                    const newNodeId = `agent-${nodes.length + 1}`;
                    const newAgentNode: CustomNode = {
                        id: newNodeId,
                        type: "agentNode",
                        position: {
                            x: selectedNodeData.position.x + 200,
                            y: selectedNodeData.position.y,
                        },
                        data: {
                            label: agent.name,
                            type: agent.id,
                            icon: agent.icon,
                        },
                    };

                    const newAddNode: CustomNode = {
                        id: `add-${nodes.length + 2}`,
                        type: "addNode",
                        position: {
                            x: selectedNodeData.position.x + 400,
                            y: selectedNodeData.position.y,
                        },
                        data: { label: "Add Agent" },
                    };
                    setNodes((nds) => [
                        ...nds.filter((n) => n.id !== "1"),
                        newAgentNode,
                        newAddNode,
                    ]);
                    const newEdges: Edge[] = [
                        {
                            id: `edge-${selectedNode}-${newNodeId}`,
                            source: selectedNode,
                            sourceHandle: "add-source",
                            target: newNodeId,
                            targetHandle: "agent-target",
                            style: { stroke: "#007bff", strokeWidth: 2 },
                        },
                        {
                            id: `edge-${newNodeId}-${newAddNode.id}`,
                            source: newNodeId,
                            sourceHandle: "agent-source",
                            target: newAddNode.id,
                            targetHandle: "add-target",
                            style: { stroke: "#007bff", strokeWidth: 2 },
                        },
                    ];

                    setEdges((eds) => [...eds, ...newEdges]);
                }
            }

            setDialogOpen(false);
            setSelectedNode(null);
        },
        [nodes, selectedNode, setNodes, setEdges]
    );
    useEffect(() => {
        console.log("Initial Nodes:", nodes);
        console.log("Initial Edges:", edges);
    }, [nodes, edges]);

    return (
        <SidebarProvider>
            <div className="flex h-screen w-full">
                <div className="relative flex-1">
                    <div className="absolute left-4 top-4 z-10">
                        <Button variant="secondary" size="sm" className="gap-2">
                            <ChevronLeft className="h-4 w-4" />
                            New Scenario
                        </Button>
                    </div>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onNodeClick={onNodeClick}
                        nodeTypes={nodeTypes}
                        snapToGrid
                        fitView
                        className="bg-background"
                    >
                        <Background variant={BackgroundVariant.Dots} gap={24} size={1} />
                        <Controls />
                        <MiniMap />
                    </ReactFlow>
                    <AgentSelectorDialog
                        open={dialogOpen}
                        onClose={() => setDialogOpen(false)}
                        onSelectAgent={handleSelectAgent}
                    />
                </div>
            </div>
        </SidebarProvider>
    );
}
