import { useState, type Dispatch, type SetStateAction } from 'react';
import type { ITechType } from '../../type';

interface ITechCardProps {
    tech: ITechType,
    selectedTech: ITechType[],
    setSelectedTech: Dispatch<SetStateAction<ITechType[]>>


}

const TechCard = ({ tech, selectedTech, setSelectedTech }: ITechCardProps) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleChosenTech = () => {
        setIsSelected(true);

        setSelectedTech([...selectedTech, tech])
    }

    return (
        <div>

            {/* availaable tech card */}
            <div className="flex flex-col justify-between rounded-2xl border border-gray-50 bg-white p-6 shadow-sm transition hover:shadow-md">
                
                <div>
                    
                    <div className="flex items-center justify-between">
                        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain"/>

                        {tech.badge && (
                            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-blue-500">
                                {tech.badge}
                            </span>
                        )}
                    </div>

                   
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                        {tech.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
                        {tech.description}
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="mt-6">
                    {/* Category, Difficulty, & Rating Line */}
                    <div className="flex items-center justify-between text-xs font-medium">
                        {/* Category */}
                        <span className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
                            {tech.category}
                        </span>

                        {/* Difficulty */}
                        <span className="text-gray-400">
                            {tech.difficulty}
                        </span>

                        {/* Rating */}
                        <span className="flex items-center gap-1 font-bold text-gray-900">
                            <span className="text-amber-400">★</span>
                            {tech.rating}
                        </span>
                    </div>

                    {/* Action Button */}
                    <button onClick={() => handleChosenTech()}
                            disabled={isSelected}
                            className="mt-5 w-full cursor-pointer rounded-xl bg-[#0B0F19] py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                        {isSelected ? "Added" : "Add to Stack"}
                    </button>
                </div>
            </div>




            
        </div>
    );
};

export default TechCard;