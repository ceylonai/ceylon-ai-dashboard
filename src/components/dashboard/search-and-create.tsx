import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchAndCreate() {
    return (
        <div className="flex justify-between items-center mb-6">
        <Input
            className="w-64 bg-white dark:bg-gray-800"
    type="text"
    placeholder="Value"
    />
    <Button className="bg-purple-600 hover:bg-purple-700 text-white">Create Project</Button>
    </div>
)
}