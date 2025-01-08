
'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Brain, Search, MessageSquare, Plus } from 'lucide-react'
import { AIAgent } from "../types/flow"

interface AgentSelectorDialogProps {
  open: boolean
  onClose: () => void
  onSelectAgent: (agent: AIAgent) => void
}

const availableAgents: AIAgent[] = [
  {
    id: "assistant",
    name: "AI Assistant",
    icon: "bot",
    description: "General purpose AI assistant"
  },
  {
    id: "researcher",
    name: "AI Researcher",
    icon: "search",
    description: "Research and analysis focused AI"
  },
  {
    id: "writer",
    name: "AI Writer",
    icon: "pen",
    description: "Content generation and writing"
  },
  {
    id: "analyst",
    name: "AI Analyst",
    icon: "brain",
    description: "Data analysis and insights"
  }
]

const getAgentIcon = (icon: string) => {
  switch (icon) {
    case 'bot':
      return <Bot className="h-5 w-5" />
    case 'search':
      return <Search className="h-5 w-5" />
    case 'brain':
      return <Brain className="h-5 w-5" />
    default:
      return <MessageSquare className="h-5 w-5" />
  }
}

export function AgentSelectorDialog({
  open,
  onClose,
  onSelectAgent,
}: AgentSelectorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select AI Agent</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px] pr-4">
          <div className="grid gap-4">
            {availableAgents.map((agent) => (
              <Button
                key={agent.id}
                variant="outline"
                className="flex w-full items-center justify-start gap-3 px-4"
                onClick={() => onSelectAgent(agent)}
              >
                {getAgentIcon(agent.icon)}
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-medium">{agent.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {agent.description}
                  </span>
                </div>
              </Button>
            ))}
            <Button
              variant="outline"
              className="flex w-full items-center justify-start gap-3 border-dashed px-4"
            >
              <Plus className="h-5 w-5" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-medium">Create Custom Agent</span>
                <span className="text-xs text-muted-foreground">
                  Build a new AI agent from scratch
                </span>
              </div>
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
