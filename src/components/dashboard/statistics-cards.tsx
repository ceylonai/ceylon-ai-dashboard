import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from 'lucide-react'

const stats = [
    { title: "NETWORK", value: "20" },
    { title: "PROJECTS", value: "10" },
    { title: "EXECUTIONS", value: "50" },
]

export function StatisticsCards() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {stat.title}
                        </CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

