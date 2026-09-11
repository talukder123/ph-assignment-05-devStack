import { type Dispatch, type SetStateAction } from 'react';
import type { ITechType } from '../../type';
import { toast } from "react-toastify";

interface ITechCardProps {
    tech: ITechType,
    selectedTech: ITechType[],
    setSelectedTech: Dispatch<SetStateAction<ITechType[]>>


}

const TechCard = ({ tech, selectedTech, setSelectedTech }: ITechCardProps) => {

    const isSelected = selectedTech.some(
        (item) => item.id === tech.id
    );

    const handleChosenTech = () => {
        setSelectedTech(prev => [...prev, tech]);
        toast.success(`${tech.name} added to your stack!`);
    }

    return (
        <div>

                <div className={`flex flex-col justify-between rounded-2xl border p-6 shadow-sm
                    ${isSelected
                    ? "border-pink-300 bg-pink-100"
                    : "border-gray-50 bg-white hover:shadow-md"
                }  `}>

                <div>

                    <div className="flex items-center justify-between">
                        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />

                        {tech.badge && (
                            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-pink-600">
                                {tech.badge}
                            </span>
                        )}
                    </div>


                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                        {tech.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        {tech.description}
                    </p>
                </div>

    
                <div className="mt-6">
                    
                    <div className="flex items-center justify-between text-xs font-medium">
                        
                        <span className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
                            {tech.category}
                        </span>

                        <span className="text-gray-400">
                            {tech.difficulty}
                        </span>

                        <span className="flex items-center gap-1 font-bold text-gray-900">
                            <span className="text-amber-400">★</span>
                            {tech.rating}
                        </span>
                    </div>

                    <button onClick={() => handleChosenTech()}
                        disabled={isSelected}
                        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold text-white transition ${isSelected
                            ? "cursor-not-allowed bg-red-300"
                            : "cursor-pointer bg-[#0B0F19] hover:bg-gray-800"
                            }`}>
                        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                </div>
            </div>


        </div>
    );
};

export default TechCard;