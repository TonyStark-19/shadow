import { ShadowCard } from "./shadow-card";
import { Shadow } from "@/types/shadow";

export const ShadowGrid = ({ shadows }: { shadows: Shadow[] }) => {
    return (
        <div className="flex items-start gap-12 flex-wrap py-5 px-5">
            {shadows.map((item) => (
                <div id={item.id}>
                    <ShadowCard shadow={item} />
                </div>
            ))}
        </div>
    );
}