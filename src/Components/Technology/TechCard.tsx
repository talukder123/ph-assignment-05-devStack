import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { ITechType } from '../../type';

interface ITechCardProps {
    tech : ITechType,
    selectedTech: ITechType[],
    setSelectedTech: Dispatch<SetStateAction<ITechType[]>>

    
}

const TechCard = ({tech, selectedTech, setSelectedTech}: ITechCardProps) => {

    const [isSelected, setIsSelected] = useState(false)

    return (
        <div>

            {/* availaable tech card */}
            <div>

            </div>
        </div>
    );
};

export default TechCard;