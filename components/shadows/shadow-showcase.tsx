"use client";

import { useState } from "react";
import { ShadowGrid } from "./shadow-grid";
import { Shadows } from "@/data/shadows";

const categories = ["all", "box", "drop", "text"];

export const ShadowShowcase = () => {
    const [activeTab, setActiveTab] = useState("all");

    const filteredShadows = Shadows.filter((item) => activeTab === "all" ? true : item.category === activeTab);

    return (
        <div className="">
            <h2 className="text-2xl">CSS & Tailwind Shadows</h2>
            <span> Explore ready-to-use shadow styles</span >

            <div className="flex items-center gap-5 bg-neutral-300 my-5 p-2 rounded-lg">
                {categories.map((category) => (
                    <div key={category}
                        style={{ backgroundColor: activeTab === category ? "grey" : "" }}
                        className="rounded-lg px-4 py-2 cursor-pointer"
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