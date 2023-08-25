import CustomForm from "./CustomForm";

export default function Popup(props) {
    return (
        <div className="h-screen bg-[#1E293B] z-40 absolute top-0 left-0 right-0 bottom-0 w-screen flex flex-col justify-center items-center">
            <div className="h-2/3 w-1/3 drop-shadow-2xl flex flex-col justify-center items-center  bg-theme-blue rounded-lg">
                <p className="text-white m-6 text-3xl font-mono">{props.heading}</p>
                <CustomForm buttonText={props.buttonText} priority={props.priority} title={props.title} description={props.description} status={props.status} _id={props._id} operation={props.operation} setShow={props.setShow}/>
            </div>
        </div>
    );
}

// bg-[#1E293B]