"use client";

import { useState } from "react";
import { CreateAppDialog } from "@/components/workspace/create-app-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchAndCreate() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-between items-center mb-6">
            {/* Input field */}
            <Input
                className="w-64 bg-white dark:bg-gray-800"
                type="text"
                placeholder="Value"
            />

            {/* Create Project Button */}
            <Button
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => setOpen(true)}
            >
                Create Project
            </Button>

            {/* Dialog Component */}
            <CreateAppDialog open={open} onOpenChange={setOpen} />
        </div>
    );
}
