import { useSelector } from "react-redux";

export default function ChatMsg({msg}){
  const username=useSelector(state=>state.msgs.users);

  console.log("Rendering ChatMsg:", msg);
    return(
      <>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
   {username||"Richa"}
    <time className="text-xs opacity-50">{msg.time}</time>
  </div>
  <div className="chat-bubble">{msg.text}</div>
  <div className="chat-footer opacity-50">Seen at 12:46</div>
</div>
</>
    );
}