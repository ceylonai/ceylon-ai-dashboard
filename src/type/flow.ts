export interface AIAgent {
    id: string
    name: string
    icon: string
    description: string
}

export interface CustomNode {
    id: string
    type: 'addNode' | 'agentNode'
    position: { x: number; y: number }
    data: {
        label: string
        type?: string
        icon?: string
    }
}

export interface SidebarItem {
    icon: any
    label: string
    href?: string
}