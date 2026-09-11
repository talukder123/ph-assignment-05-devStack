import type { ITechType } from "../../type";
import { use, useState } from "react";
import AvailableTech from "./AvailableTech";
import ChoosenTech from "./ChoosenTech";

interface ItechProps {
    techPromise: Promise<ITechType[]>
}

const Technologies = ({ techPromise }: ItechProps) => {

    const Technologies = use(techPromise);

    const [selectedTech, setSelectedTech] = useState<ITechType[]>([])

    return (
        <div>
            <div id="allTech" className="container mx-auto mb-18 max-w-7xl px-6">
                <h2 className="text-center text-3xl font-bold text-gray-900 md:text-left md:text-4xl">
                    Explore the{" "}
                    <span className="bg-linear-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>

                <p className="mt-3 text-center text-sm text-gray-500 md:text-left md:text-lg">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-4">
                <div className="md:col-span-3">
                    <AvailableTech Technologies={Technologies} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></AvailableTech>
                </div>

                <div className="md:col-span-1">
                    <ChoosenTech selectedTech={selectedTech} setSelectedTech={setSelectedTech}></ChoosenTech>
                </div>

            </div>



        </div>
    );
};

export default Technologies;