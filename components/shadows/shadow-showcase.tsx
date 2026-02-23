"use client";

import { useState } from "react";
import { ShadowGrid } from "./shadow-grid";
import { Shadows } from "@/data/shadows";

const categories = ["all", "box", "text", "drop"];

export const ShadowShowcase = () => {
    const [activeTab, setActiveTab] = useState("all");

    const filteredShadows = Shadows.filter((item) => activeTab === "all" ? true : item.category === activeTab);

    return (
        <div className="p-4">
            <h2 className="text-xl md:text-2xl font-semibold">CSS & Tailwind Shadows</h2>
            <span className="text-secondary-text"> Explore ready-to-use shadow styles</span >

            <div className="flex items-center gap-3 md:gap-5 bg-muted my-5 p-2 rounded-lg">
                {categories.map((category) => (
                    <div key={category}
                        className={`rounded-lg px-4 py-2 font-medium text-base hover:bg-white cursor-pointer ${activeTab === category ? "bg-accent/50" : ""}`}
                        onClick={() => setActiveTab(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </div>
                ))}
            </div>

            <ShadowGrid shadows={filteredShadows} />
        </div >
    );
}