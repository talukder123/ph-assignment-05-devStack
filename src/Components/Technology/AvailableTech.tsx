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
        <div>
            {
                Technologies.map((tech:ITechType, index:number) => {
                    return (
                        <TechCard key={index} tech={tech} selectedTech={selectedTech} setSelectedTech={selectedTech}></TechCard>
                    )
                })
            }
        </div>
    );
};

export default AvailableTech;