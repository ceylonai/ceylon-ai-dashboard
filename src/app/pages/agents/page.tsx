'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Users, UserPlus, Briefcase, IdCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface Agent {
    id: string;
    name: string;
    jobRole: string;
    instructions: string;
    profileId?: string;
}

export default function App() {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [formData, setFormData] = useState<Omit<Agent, "id">>({
        name: "",
        jobRole: "",
        instructions: "",
        profileId: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newAgent: Agent = {
            id: crypto.randomUUID(),
            ...formData,
        };
        setAgents([...agents, newAgent]);
        setFormData({ name: "", jobRole: "", instructions: "", profileId: "" });
    };

    return (
        <div className="p-6">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Agent Management</h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="text-sm font-medium">{agents.length} Agents</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Agents List */}
                    <Card className="p-4">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Registered Agents
                        </h2>
                        <ScrollArea className="h-[400px] pr-4">
                            <div className="space-y-3">
                                {agents.length === 0 ? (
                                    <div className="text-center py-8">
                                        <Users className="h-12 w-12 mx-auto mb-3 text-muted" />
                                        <p className="text-sm text-muted-foreground">No agents registered yet</p>
                                    </div>
                                ) : (
                                    agents.map((agent) => (
                                        <Card
                                            key={agent.id}
                                            className="p-3 border bg-card hover:bg-accent/50 transition-colors"
                                        >
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <IdCard className="h-4 w-4 text-muted-foreground" />
                                                        <h3 className="font-medium">{agent.name}</h3>
                                                    </div>
                                                    <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                                                        {agent.jobRole}
                          </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{agent.instructions}</p>
                                                {agent.profileId && (
                                                    <p className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded inline-block">
                                                        ID: {agent.profileId}
                                                    </p>
                                                )}
                                            </div>
                                        </Card>
                                    ))
                                )}
                            </div>
                        </ScrollArea>
                    </Card>

                    {/* Registration Form */}
                    <Card className="p-4">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <UserPlus className="h-4 w-4" />
                            Register New Agent
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Agent Name</Label>
                                <Input
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Enter agent name"
                                    className={cn("bg-background")}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="jobRole">Job Role</Label>
                                <Input
                                    id="jobRole"
                                    required
                                    value={formData.jobRole}
                                    onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                                    placeholder="Enter job role"
                                    className={cn("bg-background")}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="instructions">Instructions</Label>
                                <Textarea
                                    id="instructions"
                                    required
                                    value={formData.instructions}
                                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                                    placeholder="Enter agent instructions"
                                    className={cn("min-h-[100px] bg-background")}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="profileId">Profile ID (Optional)</Label>
                                <Input
                                    id="profileId"
                                    value={formData.profileId}
                                    onChange={(e) => setFormData({ ...formData, profileId: e.target.value })}
                                    placeholder="Enter profile ID"
                                    className={cn("bg-background")}
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                <UserPlus className="h-4 w-4 mr-2" />
                                Register Agent
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}