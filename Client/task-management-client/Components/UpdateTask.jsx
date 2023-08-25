import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'
import { TbEdit } from 'react-icons/tb'
import { MdDelete } from 'react-icons/md'
import { useState } from 'react'
import Popup from './Popup'
import axios from 'axios'
import axiosCall from '../models/AxiosCall'
import qs from 'qs'


export default function UpdateTask({_id, setTasks, status, title, priority, description}){
    const [show, setShow] = useState(false);

    const notShow = () => {
        setShow(!show);
    }

    function deleteTask(){
        axios({
            method: 'post',
            url: 'http://localhost:8000/delete',
            data: qs.stringify({
                _id: _id,
                status: status,
            })
            ,
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then((res) => setTasks(res.data));

        window.location.reload();
    }

    return (
        <div>
            {
                show && <Popup buttonText="Edit task" className="absolute" setShow={setShow} priority={priority} title={title} description={description} status={status} _id={_id} operation="edit" heading="Edit Task"/>
            }
            <div className="w-full flex justify-evenly pb-4">
                {/* <button>
                    <BsArrowLeftCircle color="white" size='25px'/>
                </button> */}
                <button onClick={notShow}>
                    <TbEdit color="white" size='25px'/>
                </button>
                <button onClick={deleteTask}>
                    <MdDelete color="white" size='25px'/>
                </button>
                {/* <button>
                    <BsArrowRightCircle color="white" size='25px'/>
                </button> */}
            </div>
        </div>
    );
}