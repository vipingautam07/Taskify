import Priority from "./Priority";
import { useState } from "react";
import UpdateTask from "./UpdateTask";

export default function Task({title, description, status, priority, _id, setTasks}){
    // const task = props.task;
    // console.log(task);

    console.log(priority);

    const [show, setShow] = useState(false);

    const notShow = () => {
        setShow(!show);
    }

    return (
        <div className="bg-theme-blue h-fit my-5 mx-8 rounded-lg ">
            <div onClick={notShow} className={`cursor-pointer flex flex-col justify-start items-center`}>
                <p className="text-slate-400 font-mono font-semibold my-1 text-lg">{title}</p>
                <p className="text-slate-500 font-mono mt-2 text-sm">{description}</p>
                <Priority priority={priority} title={title}  description={description}  status={status} _id={_id}/>
            </div>
            <div className="my-2">
                {
                    show && <UpdateTask setTasks={setTasks} _id={_id} priority={priority} title={title}  description={description} status={status}/>
                }
            </div>
        </div>
    );
}


// border-slate-500 border-[0.25px]