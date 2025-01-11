'use client';

import * as React from "react";
import dynamic from "next/dynamic";
import ReactFlow, {
    Background,
    Controls,
    ReactFlowProvider,
    useReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
    Node,
    Edge,
    NodeChange,
    EdgeChange,
} from "reactflow";
import { LeftSidebar } from "@/components/workspace/left-sidebar";
import { RightSidebar } from "@/components/workspace/right-sidebar";
import "reactflow/dist/style.css";
import TabNavigation from "@/components/workspace/tab-bar";

const FlowBuilder = dynamic(() => import("@/components/workspace/flow-builder"), {
    ssr: false,
});

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

function Flow() {
    const [nodes, setNodes] = React.useState<Node[]>(initialNodes);
    const [edges, setEdges] = React.useState<Edge[]>(initialEdges);
    const { project } = useReactFlow();

    const onNodesChange = React.useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );

    const onEdgesChange = React.useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    const onDragOver = React.useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }, []);

    const onDrop = React.useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();

            const type = event.dataTransfer.getData("application/reactflow");

            if (!type) return;

            const position = project({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode: Node = {
                id: `${type}-${nodes.length + 1}`,
                type,
                position,
                data: { label: `${type} node` },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [project, nodes]
    );

    return (
        <div className="flex h-screen w-full overflow-hidden bg-white">
            <LeftSidebar />
            <div className="flex flex-1 flex-col">
                <div className="flex-1" onDragOver={onDragOver} onDrop={onDrop}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                    >
                        <Background />
                        <Controls />
                    </ReactFlow>
                </div>
                <TabNavigation />
                <FlowBuilder />
            </div>
            <RightSidebar />
        </div>
    );
}

export default function Page() {
    return (
        <ReactFlowProvider>
            <Flow />
        </ReactFlowProvider>
    );
}


  
  