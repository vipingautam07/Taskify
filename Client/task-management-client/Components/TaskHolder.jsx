import Tasklist from "./Tasklist";
import { useEffect, useState } from "react";
import axios from 'axios';
import axiosCall from "../models/AxiosCall";

export default function TaskHolder(){

    return (
        <div className="py-8 px-16">
            <div className="w-full grid grid-cols-3 gap-8 rounded border-white">
                <Tasklist title='To-do' status='to-do'/>
                <Tasklist title='In Progress' status='in-progress'/>
                <Tasklist title='Done!' status='done'/>
            </div>
        </div>
    );
}