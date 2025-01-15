'use client'
import { Sidebar } from "@/components/dashboard/sidebar"
import { ProjectCards } from "@/components/dashboard/project-cards"
import { StatisticsCards } from "@/components/dashboard/statistics-cards"
import { CurrentPlan } from "@/components/dashboard/current-plan"
import { SearchAndCreate } from "@/components/dashboard/search-and-create"

export default function Dashboard() {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar className="w-64 hidden md:block" />
            <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 p-8">
                <SearchAndCreate />
                <div className="mt-8">
                    <ProjectCards />
                </div>
                <div className="mt-8">
                    <StatisticsCards />
                </div>
                <div className="mt-8">
                    <CurrentPlan />
                </div>
            </main>
        </div>
    )
}