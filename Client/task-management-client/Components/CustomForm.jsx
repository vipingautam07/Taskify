import axios from "axios";
import { useState } from "react";
import qs from 'qs';
// import axiosCall from "../models/AxiosCall";

export default function CustomForm(props) {
    const [userData, setUserData] = useState({
        title: props.title,
        description: props.description,
        priority: props.priority,
        status: props.status
    });
    // const [userData, setUserData] = useState({
    //     title: "",
    //     description: "",
    //     priority: "",
    //     status: ""
    // });

    function handleTextInputs(event) {
        const {name , value} = event.target;
        setUserData((prevValue) => {
            return {
                ...prevValue,
                [name] : value
            }
        });
    }

    function handleRadioInputs(event) {
        const {name, value} = event.target;
        setUserData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        // event.preventDefault();

        console.log('userData' + JSON.stringify(userData));

        const finalData = userData;
        console.log('finalData' + finalData);

        const { title, description, status, priority } = userData;

        props.operation==='add' && axios({
            method: 'post', 
            url: 'http://localhost:8000/insert',
            data: qs.stringify({
                title: title,
                description: description,
                status : status,
                priority : priority
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        });

        props.operation==='edit' && axios({
            method: 'post', 
            url: 'http://localhost:8000/update-task',
            data: qs.stringify({
                _id: props._id,
                title: title,
                description: description,
                status : status,
                priority : priority
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        });



        // axios.post('http://localhost:8000/insert', {title, description, status, priority});

        setUserData({
            title: "",
            description: "",
            priority: "",
            status: "",
        });

        console.log(finalData);
    }

    function handleClose(){
        props.setShow(false);
    }

    return (
        <form method="POST" action="" className="flex flex-col justify-center py-5 px-10 font-mono" >
            <label className="text-slate-400 text-lg" htmlFor="">Title</label>
            <input onChange={handleTextInputs} className="bg-slate-300 rounded-md h-9 px-2" type="text" id="title" autoComplete="off" value={userData.title} name="title"/><br />
            <label className="text-slate-400 text-lg" htmlFor="">Description</label>
            <input onChange={handleTextInputs} className="bg-slate-300 rounded-md h-9 px-2" autoComplete="off" value={userData.description} type="text" name="description"/><br />
            {/* <label className="text-slate-400 text-lg" htmlFor="">Priority</label>
            <input onChange={handleTextInputs} className="bg-slate-300 rounded-md h-9 px-2" type="text" id="title" autoComplete="off" value={userData.priority} name="priority"/><br /> */}
            {/* <label className="text-slate-400 text-lg" htmlFor="">Status</label>
            <input onChange={handleTextInputs} className="bg-slate-300 rounded-md h-9 px-2" autoComplete="off" value={userData.status} type="text" name="status"/><br /> */}

            <div className="flex justify-between my-1">
                <span>
                    <input onChange={handleRadioInputs} type="radio" name="priority" checked={userData.priority === 'high'} value="high" placeholder="high"/><span className="text-slate-400 px-3">High</span>
                </span>
                <span>
                    <input onChange={handleRadioInputs} type="radio" name="priority" checked={userData.priority === 'medium'} value="medium" placeholder="medium"/><span className="text-slate-400 px-3">Medium</span>
                </span>
                <span>
                    <input onChange={handleRadioInputs} type="radio" name="priority" checked={userData.priority === 'low'} value="low" placeholder="low"/><span className="text-slate-400 px-3">Low</span>
                </span>
            </div>

            <label className="text-slate-400 text-lg" htmlFor="">Status</label>
            <div className="flex justify-between my-1">
                <span>
                    <input onChange={handleRadioInputs} type="radio" checked={userData.status === 'to-do'} name="status" value="to-do" /><span className="text-slate-400 px-3">To-do</span>
                </span>
                <span>
                    <input onChange={handleRadioInputs} type="radio" checked={userData.status === 'in-progress'} name="status" value="in-progress"/><span className="text-slate-400 px-3">In Progress</span>
                </span>
                <span>
                    <input onChange={handleRadioInputs} type="radio" checked={userData.status === 'done'} name="status" value="done"/><span className="text-slate-400 px-3">Done</span>
                </span>
            </div>
            
            <div className="w-full flex flex-row items-center justify-around">
                <button className="bg-white rounded-md hover:bg-slate-400 hover:text-white text-theme-blue font-bold w-fit h-fit px-4 py-2 my-2" onClick={handleSubmit}>
                    {props.buttonText}
                </button>

                <button className="bg-white rounded-md hover:bg-slate-400 hover:text-white text-theme-blue font-bold w-fit h-fit px-4 py-2 my-2" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </form>
    );
}