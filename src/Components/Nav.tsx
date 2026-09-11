import logoText from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Nav = () => {
    return (
        <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="">
                <div className="container mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-4">

                    <div className="flex items-center justify-between md:hidden">
                        <button className="cursor-pointer text-2xl">
                            <img src={hamburger} alt="Menu" className="pl-1 h-6 w-6" />
                        </button>

                        <img src={logoText} alt="Dev Stack" className="h-9 w-auto"/>

                        <div className="flex items-center gap-2">
                            <button className="cursor-pointer px-2 py-1 text-sm font-semibold text-gray-500">
                                Sign In
                            </button>

                            <button className="cursor-pointer rounded-full bg-pink-600 px-3 py-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-80">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    <div className="hidden items-center justify-between md:flex">
                        <img
                            src={logoText} alt="Dev Stack" className="h-10 w-auto"/>

                        <ul className="flex items-center gap-8 font-medium">
                            <li className="cursor-pointer font-semibold text-pink-700">Home</li>
                            <li className="cursor-pointer font-semibold text-gray-500">Technologies</li>
                            <li className="cursor-pointer font-semibold text-gray-500">Projects</li>
                            <li className="cursor-pointer font-semibold text-gray-500">About</li>
                            <li className="cursor-pointer font-semibold text-gray-500">Contact</li>
                        </ul>

                        <div className="flex items-center gap-3">
                            <button className="cursor-pointer rounded-lg px-4 py-2 font-semibold text-gray-500 transition hover:bg-base-200">
                                Sign In
                            </button>

                            <button className="cursor-pointer rounded-full bg-pink-600 px-5 py-2 font-semibold text-white transition-opacity hover:opacity-80">
                                Sign Up
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;