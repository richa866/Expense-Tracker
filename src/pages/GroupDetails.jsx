import Avatar from "../components/GroupAvatar";

export default function GroupDetails(){
    return(
        <div className="flex w-full items-center justify-between border-b border-gray-300">
            <div className="flex items-center gap-2 m-2">
                <Avatar/>
                <span className="font-semibold text-xl">Family</span>
            </div>
            <div className="m-4">
                <div className="flex gap-3 text-xl">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-bell"></i>
                </div>
            </div>
        </div>
    );
}