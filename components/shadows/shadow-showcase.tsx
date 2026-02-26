"use client";

import { useState } from "react";
import { ShadowGrid } from "./shadow-grid";
import { Shadows } from "@/data/shadows";
import { motion } from "motion/react";

const categories = ["all", "box", "text", "drop"];

export const ShadowShowcase = () => {
    const [activeTab, setActiveTab] = useState("all");

    const filteredShadows = Shadows.filter((item) => activeTab === "all" ? true : item.category === activeTab);

    // Calculate counts for each category
    const counts = categories.reduce<Record<string, number>>((acc, category) => {
        acc[category] =
            category === "all"
                ? Shadows.length
                : Shadows.filter((s) => s.category === category).length;
        return acc;
    }, {});

    return (
        <div id="shadow-showcase" className="p-4 scroll-m-7">
            <motion.h2 initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-semibold">CSS & Tailwind Shadows</motion.h2>

            <motion.p initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-secondary mt-1 tracking-wide pb-5 max-[500px]:pb-2">Explore ready-to-use shadow styles</motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center gap-3 md:gap-5 bg-muted my-5 p-2 rounded-lg"
            >
                {categories.map((category) => (
                    <div key={category}
                        onClick={() => setActiveTab(category)}
                        className={`rounded-lg relative w-full text-center py-2 font-medium text-base tracking-wide hover:bg-white cursor-pointer`}
                    >
                        {activeTab === category &&
                            <motion.div layoutId="highlight"
                                className="absolute inset-0 bg-accent/70 rounded-lg"
                                transition={{ type: "spring", bounce: 0.2 }}
                            />}

                        <span className={`relative text-sm ${activeTab === category ? "text-black" : "text-secondary"} transition-all duration-300`} >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                            <span className="max-[500px]:hidden">
                                {" "}({counts[category]})
                            </span>
                        </span>
                    </div>
                ))}
            </motion.div>

            <ShadowGrid shadows={filteredShadows} />
        </div >
    );
}