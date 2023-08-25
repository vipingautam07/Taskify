import Task from "./Task";
import { useEffect, useState } from "react";
import axios from 'axios';
import qs from 'qs';
// import getAllTasks from "../models/GetAllTasks";


export default function Tasklist(props){
    const [tasks, setTasks] = useState([]);

    async function getTasks() {
        await axios({
            method: 'post',
            url: 'http://localhost:8000/fetch-tasks',
            data: qs.stringify({
                status: props.status,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then((res) => setTasks(res.data));
    }

    useEffect(() => {
        getTasks();
    },[Tasklist]);

    const renderedTasks = tasks.map(task => {
        return (
            <Task title={task.title} setTasks={setTasks} description={task.description}  status={task.status} priority={task.priority} _id={task._id}   />
        );
    })

    return (
        <div className="bg-[#1E293B] rounded-xl h-[34vw] overflow-scroll flex-row item-start  // border-2 border-white  ">
            <div className="w-full bg-[#1E293B] sticky top-0 h-20 border-b-[0.25px] border-slate-600 flex justify-center items-center ">
                <p className="text-slate-400 text-3xl font-mono">{props.title}</p>
            </div>
            <div className="overflow-scroll">
                {renderedTasks}
            </div>
        </div>
    );
}