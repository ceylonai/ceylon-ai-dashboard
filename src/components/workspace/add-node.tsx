'use client'

import { Handle, Position } from 'reactflow'
import { Plus } from 'lucide-react'

interface AddNodeProps {
  data: never;
}
export default function AddNode({ data }: AddNodeProps) {
    return (
        <div
            className="relative flex h-16 w-16 cursor-grab items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg transition-transform hover:scale-105">
            <Plus className="h-8 w-8 text-white"/>
            <Handle type="target" position={Position.Left} className="!bg-transparent"/>
            <Handle type="source" position={Position.Right} className="!bg-transparent"/>
            {data && <p></p>}
        </div>
    )
}