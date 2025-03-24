import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMsg } from "../features/msg/msgSlice";
export default function SendMessage(){
    const [input, setInput]=useState("");
    const dispatch=useDispatch();
    const addMsgHandler=(e)=>{
        e.preventDefault();
        dispatch(
addMsg(input)
        )
        setInput('');
    }
    return(
        <div className="fixed bottom-0 w-full bg-white p-4 shadow-md">
            <div className="join w-full flex gap-1">
                <form onSubmit={addMsgHandler}>
                <input 
                    type="text" 
                    value={input}
                    placeholder="Type here" 
                    onChange={(e)=>setInput(e.target.value)}
                    className="input input-bordered join-item w-6xl"
                    required 
                />
                <button className="btn btn-active btn-primary join-item" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}