import { type Dispatch, type SetStateAction } from 'react';
import type { ITechType } from '../../type';
import ChoosenTechCard from './ChoosenTechCard';

interface IchosenTechProps {
    selectedTech: ITechType[],
    setSelectedTech: Dispatch<SetStateAction<ITechType[]>>
}

const ChoosenTech = ({ selectedTech, setSelectedTech }: IchosenTechProps) => {
    return (
        <div>

            <ChoosenTechCard selectedTech={selectedTech} setSelectedTech={setSelectedTech}></ChoosenTechCard>

        </div>
    );
};

export default ChoosenTech;