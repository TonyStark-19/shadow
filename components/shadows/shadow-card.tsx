"use client";

import { Shadow } from "@/types/shadow";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export const ShadowCard = ({ shadow }: { shadow: Shadow }) => {
    const [copy, setCopy] = useState<{ isCopied: boolean, typeCopy: string } | null>(null);

    useEffect(() => {
        if (!copy) return;

        const timer = setTimeout(() => {
            setCopy(null);
        }, 2000);

        return () => clearTimeout(timer);
    }, [copy]);

    function handleCopy(text: string, typeCopy: string) {
        navigator.clipboard.writeText(text);
        setCopy({ isCopied: true, typeCopy })
    }

    return (
        <div className={`${shadow.category === "box" && shadow.tailwindCss} ${shadow.style && shadow.style} 
        overflow-hidden relative size-52 lg:size-62 flex items-center justify-center group`}>

            {shadow.category !== "drop" && <span className={`${shadow.category === "text" && shadow.tailwindCss} text-xl group-hover:opacity-0 opacity-100 duration-75 transition-opacity`}>
                {shadow.category === "box" ? "Box Shadow" : "Text Shadow"}
            </span>}

            {shadow.category === "drop" &&
                <svg className={`${shadow.tailwindCss}`} xmlns="http://www.w3.org/2000/svg"
                    width="60" height="60"
                    viewBox="0 0 14 14">
                    <path fill="none" stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.004 12.383L1.53 7.424c-2.975-2.975 1.398-8.688 5.474-4.066c4.076-4.622 8.43 1.11 5.475 4.066z" />
                </svg>}

            <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center gap-4 p-4
            opacity-0 group-hover:opacity-100 duration-300 transition-all translate-y-5 group-hover:translate-y-0 bg-muted">

                <div className="flex items-center justify-center font-semibold text-lg text-center text-accent">{shadow.name}</div>

                <button className="border border-neutral-300 hover:bg-neutral-200  transition-al duration-300 text-secondary p-1 rounded-lg flex items-center justify-center"
                    onClick={() => handleCopy(shadow.tailwindCss, "tailwind")}>
                    {(copy && copy.typeCopy === "tailwind") ? (<div className="flex items-center justify-center gap-1">
                        <Check />
                        <span>Copied</span>
                    </div>) : "Copy Tailwind"}
                </button>

                <button className=" border border-neutral-300 p-1 text-secondary hover:bg-neutral-200 transition-al duration-300 rounded-lg flex items-center justify-center"
                    onClick={() => handleCopy(shadow.vanillaCss, "vanilla")}>
                    {(copy && copy.typeCopy === "vanilla") ? (<div className="flex items-center justify-center gap-1">
                        <Check />
                        <span>Copied</span>
                    </div>) : "Copy Vanilla"}
                </button>
            </div>
        </div>
    );
}