import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
    { title: "Project Alpha", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story." },
    { title: "Project Beta", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story." },
    { title: "Project Gamma", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story." },
    { title: "Project Delta", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story." },
]

export function ProjectCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800">
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{project.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}