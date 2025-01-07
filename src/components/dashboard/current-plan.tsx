import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CurrentPlan() {
    return (
        <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
                <CardTitle>Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <p className="text-sm font-medium">Used Credits</p>
                        <p className="text-2xl font-bold">40%</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-medium">Remaining Credits</p>
                        <p className="text-2xl font-bold">60%</p>
                    </div>
                    <Button>Upgrade</Button>
                </div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 bg-purple-600 rounded-full"
                        style={{ width: "40%" }}
                    ></div>
                </div>
            </CardContent>
        </Card>
    )
}