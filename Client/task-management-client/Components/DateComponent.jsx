import getDate from "../utilities/date";
import { HiPlusCircle } from 'react-icons/hi';

export default function DateComponent(){
    const date = getDate();

    return(
        <div className="flex justify-center w-full font-mono items-center h-[6rem]">
            <p className="text-slate-400 text-4xl">{date}</p>
        </div>
    );
}