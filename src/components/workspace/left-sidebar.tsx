"use client";

import React, { useState, useCallback } from "react";
import {
    Home,
    BarChart2,
    Bell,
    PieChart,
    Briefcase,
    LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LeftSidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();

    const sidebarItems = [
        { icon: Home, label: "Home", onClick: useCallback(() => console.log("Home clicked!"), []) },
        { icon: BarChart2, label: "Analytics", onClick: useCallback(() => console.log("Analytics clicked!"), []) },
        { icon: Bell, label: "Notifications", onClick: useCallback(() => console.log("Notifications clicked!"), []) },
        { icon: PieChart, label: "Statistics", onClick: useCallback(() => console.log("Statistics clicked!"), []) },
        { icon: Briefcase, label: "Agents", onClick: useCallback(() => router.push("/pages/agents"), [router]) },
        { icon: LogOut, label: "Logout", onClick: useCallback(() => console.log("Logged out!"), []) },
    ];

    return (
        <div
            className={cn(
                "group relative flex h-full flex-col bg-gradient-to-b from-pink-500 to-purple-600 transition-all duration-300",
                isExpanded ? "w-48" : "w-16"
            )}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            {/* Logo Section */}
            <div className="flex h-14 items-center justify-center border-b border-white/10">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        className="rounded-full"
                        src="/logoAi.png"
                        alt="Logo"
                        width={42}
                        height={42}
                    />
                </Link>
            </div>

            {/* Navigation Section */}
            <nav className="flex flex-1 flex-col gap-2 p-2">
                <ul className="flex flex-col gap-2">
                    {sidebarItems.map((item, index) => (
                        <li key={index}>
                            <button
                                className={cn(
                                    "flex items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/10",
                                    isExpanded ? "justify-start" : "justify-center"
                                )}
                                onClick={item.onClick}
                                aria-label={item.label}
                            >
                                <item.icon className="h-5 w-5 shrink-0" />
                                {isExpanded && <span className="text-sm">{item.label}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
