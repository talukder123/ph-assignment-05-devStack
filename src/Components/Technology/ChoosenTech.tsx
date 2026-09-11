import { type Dispatch, type SetStateAction } from 'react';
import type { ITechType } from '../../type';
import ChoosenTechCard from './ChoosenTechCard';

interface IchosenTechProps {
    selectedTech: ITechType[],
    setSelectedTech: Dispatch<SetStateAction<ITechType[]>>
}

const ChoosenTech = ({ selectedTech, setSelectedTech }: IchosenTechProps) => {
    return (
        <div className='mx-5 md:mx-0'>

            <ChoosenTechCard selectedTech={selectedTech} setSelectedTech={setSelectedTech}></ChoosenTechCard>

        </div>
    );
};

export default ChoosenTech;