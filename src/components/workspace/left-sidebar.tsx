"use client"

import * as React from "react"
import { Home, BarChart2, Bell, PieChart, Briefcase, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"

const sidebarItems = [
    { icon: Home, label: "Home" },
    { icon: BarChart2, label: "Analytics" },
    { icon: Bell, label: "Notifications" },
    { icon: PieChart, label: "Statistics" },
    { icon: Briefcase, label: "Agents" },
    { icon: LogOut, label: "Logout" },
]

export function LeftSidebar() {
    const [isExpanded, setIsExpanded] = React.useState(false)

    return (
        <div
            className={cn(
                "group relative flex h-full flex-col bg-gradient-to-b from-pink-500 to-purple-600 transition-all duration-300",
                isExpanded ? "w-48" : "w-16"
            )}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="flex h-14 items-center justify-center border-b border-white/10">
                <div className="h-8 w-8 rounded-full bg-white" />
            </div>
            <nav className="flex flex-1 flex-col gap-2 p-2">
                {sidebarItems.map((item, index) => (
                    <button
                        key={index}
                        className={cn(
                            "flex items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/10",
                            isExpanded ? "justify-start" : "justify-center"
                        )}
                    >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {isExpanded && <span className="text-sm">{item.label}</span>}
                    </button>
                ))}
            </nav>
        </div>
    )
}

