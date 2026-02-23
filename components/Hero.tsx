export const Hero = () => {
    return (
        <div className="p-5 flex flex-col gap-4 items-center justify-center">
            <div className="mt-7 bg-neutral-300 p-2 rounded-xl">Production-Ready Shadow Snippets</div>

            <h1 className=" max-w-lg text-5xl text-center my-6">
                Beautiful Shadows
                Ready to Use
            </h1>

            <p className="text-xl text-center max-w-xl">A curated collection of box, drop, and text shadows crafted for real-world interfaces.</p>

            <button className="bg-[#ff8fab] p-3 rounded-xl text-lg mt-4 ">Browse Shadows</button>

            <div className=" flex items-center justify-center gap-2 my-5 text-xl">
                <span>No adjustments </span> |
                <span> No complexity </span> |
                <span> Just copy and ship</span>
            </div>

            <a>Learn more and feel free to contribute.</a>
        </div>
    );
}