import { Shadow } from "@/types/shadow";

export const Shadows: Shadow[] = [
    {
        id: "box-soft-outline-01",
        category: "box",
        name: "Soft Outline",
        style: "border border-neutral-300",
        vanillaCss: "boxShadow: 5px 5px 0px 5px rgb(0,0,0)",
        tailwindCss: "shadow-[0px_0px_2px_2px_rgb(211,211,211)]"
    },
    {
        id: "box-subtle-edge-right-gray",
        category: "box",
        name: "Subtle Edge Right",
        style: "border border-neutral-300",
        vanillaCss: "boxShadow: 2px 0px 2px 2px rgb(211,211,211)",
        tailwindCss: "shadow-[2px_0px_2px_2px_rgb(211,211,211)]"
    },
    {
        id: "box-subtle-bottom-right-gray",
        category: "box",
        name: "Subtle Bottom Right",
        style: "border border-neutral-300",
        vanillaCss: "boxShadow:2px 2px 2px 2px rgb(211,211,211)",
        tailwindCss: "shadow-[2px_2px_2px_2px_rgb(211,211,211)]"
    },
    {
        id: "box-subtle-bottom-right-gray",
        category: "box",
        name: "Strong Sharp Black",
        style: "border border-black",
        vanillaCss: "boxShadow: 2px 2px 0px 2px rgb(0,0,0)",
        tailwindCss: "shadow-[2px_2px_0px_2px_rgb(0,0,0)]"
    },
    {
        id: "box-heavy-black",
        category: "box",
        name: "Heavy Black",
        style: "border border-black",
        vanillaCss: "boxShadow: 5px 5px 0px 5px rgb(0, 0, 0) ",
        tailwindCss: "shadow-[5px_5px_0px_5px_rgb(0,0,0)]"
    },
    {
        id: "box-extra-heavy-black",
        category: "box",
        name: "Extra Heavy Black",
        style: "border border-black",
        vanillaCss: "box-shadow: 12px 8px 0px 5px rgb(0,0,0)",
        tailwindCss: "shadow-[12px_8px_0px_5px_rgb(0,0,0)]"
    },
    {
        id: "box-soft-glow",
        category: "box",
        name: "Soft Glow",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: 0px 0px 10px 5px rgb(245,245,245);",
        tailwindCss: "shadow-[0px_0px_10px_5px_rgb(245,245,245)]"
    },
    {
        id: "box-light-glow",
        category: "box",
        name: "Light Glow",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: 0px 0px 15px 3px rgb(220,220,220);",
        tailwindCss: "shadow-[0px_0px_15px_3px_rgb(220,220,220)]"
    },
    {
        id: "box-soft-bottom-left",
        category: "box",
        name: "Soft Bottom Left",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: -1px 5px 5px 4px rgb(220,220,220);",
        tailwindCss: "shadow-[-1px_5px_5px_4px_rgb(220,220,220)]"
    },
    {
        id: "box-soft-glow-cyan",
        category: "box",
        name: "Soft Glow Cyan",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: 0px 10px 6px 3px rgb(240,255,255);",
        tailwindCss: "shadow-[0px_10px_6px_3px_rgb(240,255,255)]"
    },
    {
        id: "box-soft-glow-pink",
        category: "box",
        name: "Soft Glow Pink",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "boxShadow: 0px 0px 30px 12px rgb(255, 240, 245);",
        tailwindCss: "shadow-[0px_0px_30px_12px_rgb(255,240,245)]"
    },
    {
        id: "box-inner-glow-pink",
        category: "box",
        name: "Inner Glow Pink",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: inset 0px 0px 30px 12px rgb(255,240,245);",
        tailwindCss: "shadow-[inset_0px_0px_30px_12px_rgb(255,240,245)]"
    },
    {
        id: "text-strong-shadow",
        category: "text",
        name: "Strong Shadow",
        vanillaCss: "text-shadow: 4px 4px 3px rgba(0,0,0,0.5);",
        tailwindCss: "text-shadow-[4px_4px_3px_rgba(0,0,0,0.5)]"
    },
    {
        id: "text-subtle-shadow-gray",
        category: "text",
        name: "Subtle Shadow Gray",
        vanillaCss: "text-shadow: 3px 3px 1px rgb(211,211,211);",
        tailwindCss: "text-shadow-[3px_3px_1px_rgb(211,211,211)]"
    },
    {
        id: "text-soft-shadow-gray",
        category: "text",
        name: "Soft Shadow Gray",
        vanillaCss: "text-shadow: 2px 3px 2px rgb(211,211,211);",
        tailwindCss: "text-shadow-[2px_3px_2px_rgb(211,211,211)]"
    },
    {
        id: "text-subtle-shadow",
        category: "text",
        name: "Subtle Shadow",
        vanillaCss: "text-shadow: 1px 1px 2px rgba(0,0,0,0.2);",
        tailwindCss: "text-shadow-[1px_1px_2px_rgba(0,0,0,0.2)]"
    },
    {
        id: "text-lifted-shadow",
        category: "text",
        name: "Lifted Shadow",
        vanillaCss: "text-shadow: 1px 6px 2px rgba(0,0,0,0.2);",
        tailwindCss: "text-shadow-[1px_6px_2px_rgba(0,0,0,0.2)]"
    },
    {
        id: "text-glow-magenta",
        category: "text",
        name: "Glow Magenta",
        vanillaCss: "text-shadow: 0px 0px 10px rgb(255,0,255);",
        tailwindCss: "text-shadow-[0px_0px_10px_rgb(255,0,255)]"
    },
    {
        id: "text-bold-glow",
        category: "text",
        name: "Bold Glow",
        vanillaCss: "text-shadow: 2px 2px 0px black, 0px 0px 10px rgb(255,240,245)",
        tailwindCss: "text-shadow-[2px_2px_0px_black,0px_0px_10px_rgb(255,240,245)]"
    },
    {
        id: "text-medium-shadow",
        category: "text",
        name: "Medium Shadow",
        vanillaCss: "text-shadow: 3px 3px 1px black",
        tailwindCss: "text-shadow-[3px_3px_1px_black]"
    },
    {
        id: "text-rainbow-shadow",
        category: "text",
        name: "Rainbow Shadow",
        vanillaCss: "text-shadow: 1px 1px 0px red, 2px 2px 0px orange, 3px 3px 0px yellow",
        tailwindCss: "text-shadow-[1px_1px_0px_red,2px_2px_0px_orange,3px_3px_0px_yellow]"
    },
    {
        id: "drop-shadow-soft-black",
        category: "drop",
        name: "Soft Black Shadow",
        vanillaCss: "filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.5));",
        tailwindCss: "drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)]"
    },
    {
        id: "drop-shadow-offset-soft",
        category: "drop",
        name: "Offset Soft Depth",
        vanillaCss: "filter: drop-shadow(10px 5px 2px rgba(0,0,0,0.3));",
        tailwindCss: "drop-shadow-[10px_5px_2px_rgba(0,0,0,0.3)]"
    },
    {
        id: "drop-shadow-deep-dramatic",
        category: "drop",
        name: "Deep Dramatic Shadow",
        vanillaCss: "filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.7));",
        tailwindCss: "drop-shadow-[10px_10px_10px_rgba(0,0,0,0.7)]"
    },
    {
        id: "drop-shadow-bold-yellow",
        category: "drop",
        name: "Bold Yellow Shadow",
        vanillaCss: "filter: drop-shadow(6px 6px yellow);",
        tailwindCss: " drop-shadow-[6px_6px_yellow]"
    },
    {
        id: "drop-shadow-angled-dramatic",
        category: "drop",
        name: "Angled Dramatic Shadow",
        vanillaCss: "filter: drop-shadow(20px -14px 10px rgba(0,0,0,0.6));",
        tailwindCss: "drop-shadow-[20px_-14px_10px_rgba(0,0,0,0.6)]"
    },
    {
        id: "drop-shadow-angled-dramatic",
        category: "drop",
        name: "Angled Dramatic Shadow",
        vanillaCss: "filter: drop-shadow(0 -10px 6px rgba(0,0,0,0.3))",
        tailwindCss: "drop-shadow-[0_-10px_6px_rgba(0,0,0,0.3)]"
    },
]

