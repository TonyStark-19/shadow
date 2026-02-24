"use client"

import { motion } from "motion/react";
import { ShadowCard } from "./shadow-card";
import { Shadow } from "@/types/shadow";

export const ShadowGrid = ({ shadows }: { shadows: Shadow[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14 flex-wrap px-1">
            {shadows.map((item, i) => (
                <motion.div initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.03 * i }}
                    viewport={{ once: true }}
                    key={item.id}>
                    <ShadowCard shadow={item} />
                </motion.div>
            ))}
        </div >
    );
}