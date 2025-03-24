import DashMenu from "../components/DashMenu"
import GroupNav from "../components/GroupNav";
import GroupDetails from "./GroupDetails";
import SendMessage from "../components/Message";
import ChatSec from "../components/ChatSec";
import { useState } from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";
export default function GroupPage(){


    return(
        <Provider store={store}>
        <div className="flex">
            <div className="">
               <DashMenu/>
            </div>
            <div className="w-full">
                <GroupNav/>
                <GroupDetails/>
                <ChatSec/>
                <div className="w-full">
                <SendMessage/>
                </div>
            </div>
        </div>
        </Provider>
    );

}