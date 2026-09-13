import type { Dispatch, SetStateAction } from "react";
import type { ITechType } from "../../type";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

interface IchosenTechCardProps {
    selectedTech: ITechType[],
    setSelectedTech: Dispatch<SetStateAction<ITechType[]>>
}

const ChoosenTechCard = ({ selectedTech, setSelectedTech }: IchosenTechCardProps) => {
    return (

        <div className="rounded-2xl border border-slate-100 p-7 shadow-sm">

            <h2 className="text-2xl font-bold text-slate-900">Your Stack</h2>

            <p className="mt-1 text-sm text-slate-400">
                {selectedTech.length === 0
                    ? 'No technologies selected yet'
                    : `${selectedTech.length} ${selectedTech.length === 1 ? 'Technology' : 'Technologies'
                    } Selected`}
            </p>

            {selectedTech.length === 0 ? (
                <div className="mt-6 flex h-32 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200">
                    <p className="text-sm font-medium text-slate-400">
                        Your stack is empty
                    </p>
                </div>
            ) : (

                <div className="mt-5 space-y-3">
                    <div className="space-y-3">
                        {selectedTech.map((tech) => (
                            <div
                                key={tech.id}
                                className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-xs"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="h-8 w-8 object-contain"
                                    />
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-900">
                                            {tech.name}
                                        </h3>
                                        <p className="text-xs font-medium text-slate-400">
                                            {tech.category}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => { setSelectedTech((prev) => prev.filter((item) => item.id !== tech.id));
                                        toast.error(`${tech.name} removed from your stack!`);
                                    }}
                                    
                                    className="cursor-pointer rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                                >
                                    <IoClose size={18} />
                                </button>

                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            setSelectedTech([])
                            toast.error("All technologies removed from your stack!");
                        }  
                        }
                        
                        className="mt-4 w-full cursor-pointer rounded-xl border border-red-400 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50 hover:border-red-300"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChoosenTechCard;