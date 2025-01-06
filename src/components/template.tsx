
import { Card, CardContent } from "./card"
import { Button } from "../components/ui/button"
import "../components/ui/get-started-btn.css";

export function Templates() {
  const templates = [
    { title: "Add automated ClickUp tasks to Airtable" },
    { title: "Create an Azure task from a new Provider" },
    { title: "Send automated notifications" },
    { title: "Create a HubSpot CRM when a FlowPage" },
    { title: "Sync data between platforms" },
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">Start with a template</h3>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Get inspired by thousands of free workflow automation templates. Customize them to match your ideal workflows.
        </p>
        <Button className="sup">
          Get Started Free →
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <Card key={i} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex gap-2 mb-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-800" />
                  ))}
                </div>
                <h4 className="text-white font-medium">{template.title}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
