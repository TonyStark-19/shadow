"use client";

import { useState } from "react";
import { ShadowGrid } from "./shadow-grid";
import { Shadows } from "@/data/shadows";
import { motion } from "motion/react";

const categories = ["all", "box", "text", "drop"];

export const ShadowShowcase = () => {
    const [activeTab, setActiveTab] = useState("all");

    const filteredShadows = Shadows.filter((item) => activeTab === "all" ? true : item.category === activeTab);

    return (
        <div id="shadow-showcase" className="p-4">
            <motion.h2 initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold">CSS & Tailwind Shadows</motion.h2>
            <motion.p initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-secondary mt-0.5 tracking-wide"> Explore ready-to-use shadow styles</motion.p >

            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} className="flex items-center gap-3 md:gap-5 bg-muted my-5 p-2 rounded-lg">
                {categories.map((category) => (
                    <div key={category}
                        className={`rounded-lg px-4 py-2 font-medium text-base tracking-wide transition-all duration-300 hover:bg-white cursor-pointer ${activeTab === category ? "bg-accent/70" : ""}`}
                        onClick={() => setActiveTab(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </div>
                ))}
            </motion.div>

            <ShadowGrid shadows={filteredShadows} />
        </div >
    );
}