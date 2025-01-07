import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, LineChart, Bell, BarChart3, Package, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("pb-12 bg-purple-600", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="flex items-center mb-6">
                        <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                            <AvatarFallback>UI</AvatarFallback>
                        </Avatar>
                        <div className="text-white">
                            <h2 className="text-sm font-semibold">Example UI</h2>
                            <p className="text-xs text-white/70">example@example.com</p>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-purple-700">
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-purple-700">
                            <LineChart className="mr-2 h-4 w-4" />
                            Revenue
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-purple-700">
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-purple-700">
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Analytics
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-purple-700">
                            <Package className="mr-2 h-4 w-4" />
                            Inventory
                        </Button>
                    </div>
                </div>
            </div>
            <div className="px-3 py-2 mt-auto">
                <Link href="/">
                    <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-purple-700">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </Link>
            </div>
        </div>
    )
}

