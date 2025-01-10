'use client'

import * as React from "react"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Tab {
  id: string
  label: string
  count: number
}

export default function TabNavigation() {
  const [tabs, setTabs] = React.useState<Tab[]>([
    { id: 'all', label: 'Show All', count: 25 },
    { id: 'flow1', label: 'Flow 1', count: 8 },
    { id: 'flow3', label: 'Flow3', count: 12 },
    { id: 'light', label: 'flow light', count: 5 },
  ])

  const [activeTab, setActiveTab] = React.useState('all')

  const removeTab = (tabId: string) => {
    if (tabId === 'all') return // Prevent removing "Show All" tab
    setTabs(tabs.filter(tab => tab.id !== tabId))
    if (activeTab === tabId) {
      setActiveTab('all')
    }
  }

  return (
      <div className="w-full">
        <Card className="border-0 shadow-none">
          <div className="flex gap-2 p-2 bg-gray-100 rounded-lg overflow-x-auto">
            {tabs.map((tab) => (
                <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "secondary" : "ghost"}
                    className="flex items-center gap-2 h-10 px-4 relative group"
                    onClick={() => setActiveTab(tab.id)}
                >
                  <span>{tab.label}</span>
                  <span className="flex items-center justify-center min-w-[20px] h-5 bg-primary/10 text-primary text-xs rounded-full">
                {tab.count}
              </span>
                  {tab.id !== 'all' && (
                      <div
                          onClick={(e) => {
                            e.stopPropagation()
                            removeTab(tab.id)
                          }}
                          className="absolute -top-1 -right-1 hidden group-hover:flex items-center justify-center w-4 h-4 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </div>
                  )}
                </Button>
            ))}
          </div>
        </Card>
      </div>
  )
}
