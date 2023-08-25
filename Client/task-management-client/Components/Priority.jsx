export default function Priority(props){
    if(props.priority == 'High' || props.priority == 'high'){
        return (
            <div className={`border-rose-500 border-[1px] rounded-md my-2 h-fit w-fit`} >
                <p className={`text-rose-500 font-mono bold font-semibold text-xs mx-3 my-1`}>High</p>
            </div>
        );
    }
    else if(props.priority == 'Medium' || props.priority == 'medium'){
        return (
            <div className={`border-yellow-500 border-[1px] rounded-md my-2 h-fit w-fit`} >
                <p className={`text-yellow-500 font-mono bold font-semibold text-xs mx-3 my-1`}>Medium</p>
            </div>
        );
    }
    else if(props.priority == 'Low' || props.priority == 'low'){
        return (
            <div className={`border-green-500 border-[1px] rounded-md my-2 h-fit w-fit`} >
                <p className={`text-green-500 font-mono bold font-semibold text-xs mx-3 my-1`}>Low</p>
            </div>
        );
    }
}

