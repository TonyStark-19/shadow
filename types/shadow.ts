export interface Shadow {
    id: string,
    category: "box" | "drop" | "text",
    name: string,
    style?: string,
    vanillaCss: string,
    tailwindCss: string
}