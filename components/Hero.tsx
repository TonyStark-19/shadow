"use client"

import { motion } from "motion/react";
import { CodeXml, HeartHandshake } from "lucide-react";

export const Hero = () => {

    const handleBrowseShadowsClick = () => {
        document.getElementById("shadow-showcase")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <main className="p-3 md:p-5 flex flex-col gap-3 md:gap-4 items-center justify-center">
            <motion.div initial={{ opacity: 0, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-7 text-xs md:text-sm bg-muted px-3 py-2 rounded-xl border border-neutral-300 shadow-[0px_0px_10px_5px_rgb(245,245,245)]
                text-secondary flex items-center justify-center gap-2 tracking-wide">
                <div className="size-2 rounded-full bg-yellow-500 animate-pulse " />
                Production Ready Shadow Snippets
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-xl text-3xl md:text-4xl lg:text-6xl font-bold text-center my-3 lg:my-4 text-shadow-[2px_3px_3px_rgba(0,0,0,0.2)]">
                Beautiful Shadows
                Ready to Use
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-center max-w-xl font-medium tracking-wide text-secondary">
                A curated collection of box, drop, and text shadows crafted for real-world interfaces.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, filter: "blur(2px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mt-1 lg:mt-2"
            >
                <button
                    onClick={handleBrowseShadowsClick}
                    className="bg-accent/90 px-5 py-2 rounded-lg shadow-[0px_0px_30px_12px_rgb(255,240,245)] lg:text-lg font-medium text-sm
                    hover:bg-accent/80 cursor-pointer flex items-center gap-2"
                >
                    <CodeXml size={18} />
                    Browse Shadows
                </button>

                <a
                    href="https://github.com/daman599/shadow/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="bg-neutral-900 text-white px-5 py-2 rounded-lg lg:text-lg font-medium text-sm hover:bg-neutral-800 cursor-pointer
                    flex items-center gap-2"
                    >
                        <HeartHandshake size={18} />
                        Contribute
                    </button>
                </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className=" flex items-center justify-center gap-3 my-3 md:my-4 lg:my-5 text-secondary tracking-wide text-lg flex-wrap border-t-2
                border-neutral-300/50 pt-4">
                <div>No adjustments <span className="text-black">|</span></div>
                <div>No complexity <span className="text-black">|</span></div>
                <span>Just copy and ship</span>
            </motion.div>
        </main>
    );
}