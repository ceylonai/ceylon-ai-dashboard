"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, UserPlus } from "lucide-react";
import "./agents.css";

interface Agent {
    id: string;
    name: string;
    jobRole: string;
    instructions: string;
    profileId?: string;
}

export default function AgentsPage() {
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
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Agent Management</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Registration Form */}
                <div className="ceylon-card p-6">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <UserPlus className="h-5 w-5" />
                        Register New Agent
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter agent name"
                                className="bg-white/50 border-0"
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
                                className="bg-white/50 border-0"
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
                                className="min-h-[100px] bg-white/50 border-0"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="profileId">Profile ID (Optional)</Label>
                            <Input
                                id="profileId"
                                value={formData.profileId}
                                onChange={(e) => setFormData({ ...formData, profileId: e.target.value })}
                                placeholder="Enter profile ID"
                                className="bg-white/50 border-0"
                            />
                        </div>

                        <Button type="submit" className="w-full ceylon-gradient text-white">
                            Register Agent
                        </Button>
                    </form>
                </div>

                {/* Agents List */}
                <div className="ceylon-card p-6">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Registered Agents
                    </h2>
                    <ScrollArea className="h-[600px] pr-4">
                        <div className="space-y-4">
                            {agents.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p>No agents registered yet</p>
                                </div>
                            ) : (
                                agents.map((agent) => (
                                    <div key={agent.id} className="bg-white/50 rounded-lg p-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold">{agent.name}</h3>
                                                <span className="text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                          {agent.jobRole}
                        </span>
                                            </div>
                                            <p className="text-sm text-gray-600">{agent.instructions}</p>
                                            {agent.profileId && (
                                                <p className="text-sm text-gray-500">Profile ID: {agent.profileId}</p>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}