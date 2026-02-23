export const Hero = () => {
    return (
        <div className="p-3 md:p-5 flex flex-col gap-4 items-center justify-center ">
            <div className="mt-5 md:mt-7 text-xs md:text-sm bg-muted px-3 py-2 rounded-xl border border-neutral-300
            shadow-[0px_0px_10px_5px_rgb(245,245,245)] text-secondary-text flex items-center justify-center gap-2">
                <div className="size-2 rounded-full bg-yellow-400 animate-pulse" />
                Production-Ready Shadow Snippets
            </div>

            <h1 className="max-w-lg text-3xl md:text-4xl lg:text-5xl font-medium text-center my-3 md:my-4 text-shadow-[2px_3px_3px_rgba(0,0,0,0.2)]">
                Beautiful Shadows
                Ready to Use
            </h1>

            <p className="text-xl text-center max-w-xl font-medium text-secondary-text">A curated collection of box, drop, and text shadows crafted for real-world interfaces.</p>

            <button className="bg-accent px-5 py-2 rounded-lg shadow-[0px_0px_30px_12px_rgb(255,240,245)]
             text-lg font-medium mt-2 hover:bg-accent/80">Browse Shadows</button>

            <div className=" flex items-center justify-center gap-2 my-3 md:my-5 text-secondary-text text-base flex-wrap">
                <div>No adjustments <span className="text-black">|</span></div>
                <div>No complexity <span className="text-black">|</span></div>
                <span> Just copy and ship</span>
            </div>
        </div>
    );
}