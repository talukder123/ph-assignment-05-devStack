import bannerImg from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:py-12">
                <div className="flex-1">
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold  text-gray-900 md:text-5xl lg:text-6xl">
                            Build Your Ideal
                        </h1>
                        <h1 className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-4xl font-bold  text-transparent md:text-5xl lg:text-6xl">
                            Development Stack
                        </h1>
                    </div>

                    <p className="mb-14 max-w-xl text-base leading-7 text-gray-700 md:text-lg">
                        Explore frontend, backend, database, and tooling options,<br />
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#allTech" className="cursor-pointer rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-80">
                            Explore Technology
                        </a>

                        <button className="cursor-pointer rounded-xl border border-gray-300 px-10 py-3 font-semibold text-gray-600 transition hover:bg-gray-100">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="flex flex-1 justify-center">
                    <img
                        src={bannerImg} alt="Development Stack" className="w-full max-w-lg md:max-w-xl object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;