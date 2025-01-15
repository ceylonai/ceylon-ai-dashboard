'use client';
import { Play, RotateCcw, RefreshCw, FileBox, Settings, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function RightSidebar() {
    return (
        <div className="flex h-full flex-col items-center">
            <div className="flex w-16 flex-1 flex-col items-center gap-4 rounded-l-3xl bg-gradient-to-b from-purple-500 to-purple-900 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <div className="h-8 w-8 rounded-full bg-purple-600" />
                </div>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Play className="h-5 w-5" />
                    <span className="sr-only">Play</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <RotateCcw className="h-5 w-5" />
                    <span className="sr-only">Undo</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <RefreshCw className="h-5 w-5" />
                    <span className="sr-only">Redo</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <FileBox className="h-5 w-5" />
                    <span className="sr-only">Files</span>
                </Button>
                <div className="flex-1" />
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <MoreHorizontal className="h-5 w-5" />
                    <span className="sr-only">More</span>
                </Button>
            </div>
        </div>
    )
}

