import { type Dispatch, type SetStateAction } from 'react';
import type { ITechType } from '../../type';
import TechCard from './TechCard';

interface IavailableProps {
    Technologies : ITechType[]
    selectedTech : ITechType[]
    setSelectedTech : Dispatch<SetStateAction<ITechType[]>>
}

const AvailableTech = ({Technologies, selectedTech, setSelectedTech}: IavailableProps) => {
    return (
        <div className='mx-5 grid grid-cols-1 gap-4 md:grid-cols-3'>
            {
                Technologies.map((tech:ITechType, index:number) => {
                    return (
                        <TechCard key={index} tech={tech} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></TechCard>
                    )
                })
            }
        </div>
    );
};

export default AvailableTech;