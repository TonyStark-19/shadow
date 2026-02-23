import TwitterIcon from "./ui/twitter-icon";
import GithubIcon from "./ui/github-icon";

export const Navbar = () => {
    return (
        <div className="p-4 flex items-center justify-between ">
            <div className="text-2xl font-semibold">
                shadow
            </div>

            <div className="flex items-cssenter justify-center gap-3 md:gap-4">
                <a href={"https://x.com/daman76752"} target="_blank">
                    <TwitterIcon />
                </a>

                <a href={"https://github.com/daman599/shadow"} target="_blank">
                    <GithubIcon />
                </a>
            </div>
        </div >
    );
}