import TwitterIcon from "./ui/twitter-icon";
import GithubIcon from "./ui/github-icon";

export const Navbar = () => {
    return (
        <div className="px-2 py-3 flex items-center justify-between ">
            <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-medium">shadow</span>
            </div>

            <div className="flex items-cssenter justify-center gap-4">
                <a>
                    <TwitterIcon />
                </a>

                <a>
                    <GithubIcon />
                </a>
            </div>
        </div>
    );
}