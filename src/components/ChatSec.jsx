import ChatMsg from "./ChatMsg";
import { useSelector } from "react-redux";
export default function ChatSec(){
    const msgs = useSelector(state=>state.msgs.msgs); 
    console.log("Redux msgs:", msgs);
    return(
        <div className=" m-4">
           {msgs.length > 0 ? (
        msgs.map((msg) => <ChatMsg key={msg.id} msg={msg} />) 
      ) : (
        <p></p>
      )}
        </div>
        

    );
}