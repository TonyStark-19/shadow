import { ShadowCard } from "./shadow-card";
import { Shadow } from "@/types/shadow";

export const ShadowGrid = ({ shadows }: { shadows: Shadow[] }) => {
    return (
        <div className="flex items-start gap-8 lg:gap-12 flex-wrap px-1 md:px-3">
            {shadows.map((item) => (
                <div id={item.id}>
                    <ShadowCard shadow={item} />
                </div>
            ))}
        </div>
    );
}