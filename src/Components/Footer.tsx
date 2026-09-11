import logoText from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="container mx-auto max-w-7xl px-6 py-12 mt-40">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

                <div className="sm:col-span-2 lg:col-span-2">
                    <img src={logoText} alt="Dev Stack" className="w-32" />

                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    <ul className="mt-5 flex gap-4 font-semibold text-sm text-black">
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

                <div className="lg:col-span-1">
                    <h2 className="text-sm font-semibold text-gray-900">PRODUCT</h2>

                    <ul className="mt-4 space-y-3 text-sm text-gray-500">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <div className="lg:col-span-1">
                    <h2 className="text-sm font-semibold text-gray-900">COMPANY</h2>

                    <ul className="mt-4 space-y-3 text-sm text-gray-500">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Career</li>
                    </ul>
                </div>

                <div className="lg:col-span-1">
                    <h2 className="text-sm font-semibold text-gray-900">RESOURCES</h2>

                    <ul className="mt-4 space-y-3 text-sm text-gray-500">
                        <li>Documentation</li>
                        <li>Blog</li>
                        <li>Community</li>
                    </ul>
                </div>
            </div>

            <hr className="my-4 border-gray-200 mb-20" />

            <div className="flex flex-col gap-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 Dev Stack. All rights reserved.</p>

                <ul className="flex gap-5">
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>

    );
};

export default Footer;