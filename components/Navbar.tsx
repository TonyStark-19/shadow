"use client"

import TwitterIcon from "./ui/twitter-icon";
import GithubIcon from "./ui/github-icon";
import { motion } from "motion/react";

export const Navbar = () => {
    return (
        <nav className="px-5 py-3 md:p-4 md:pt-6 flex items-center justify-evenly max-md:justify-between">
            <motion.div initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold text-shadow-[0px_0px_10px_#ff8fab] cursor-default">
                shadow
            </motion.div>

            <div className="flex items-center justify-center gap-2 ">
                <a href={"https://x.com/daman76752"} target="_blank">
                    <motion.div initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-accent/10 p-2 rounded-full">
                        <TwitterIcon />
                    </motion.div>
                </a>

                <a href={"https://github.com/daman599/shadow"} target="_blank">
                    <motion.div initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-accent/10 p-2 rounded-full">
                        <GithubIcon />
                    </motion.div>
                </a>
            </div>
        </nav>
    );
}