import{Link,NavLink} from "react-router-dom"
import { useSelector } from 'react-redux'
export default function DashMenu(){
    const username=useSelector(state=>state.msgs.users)
    const navigation = [
        { name: 'Home',href:"/" },
        { name: 'Personal',href:"/dashboard/personal" },
        { name: 'Family',href:"/dashboard/Family" },
        { name: 'groups',href:"/groups"  },
        ]
    return(
<nav id="sidebar" class="sticky top-0 h-screen bg-white border-r border-slate-300 p-2 w-56 transition-all duration-300">
        <div class="mb-3 border-b border-slate-300 pb-3">
            <div class="flex items-center justify-between cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                <div class="flex items-center gap-2">
                   
                    <div id="profile-text">
                        <span class="block text-s font-semibold">{username}</span>
                        <span class="block text-xs text-gray-500">Pro Plan</span>
                    </div>
                </div>
            </div>
        </div>

      
        <div class="space-y-1 grid place-content-start">
        {navigation.map((item) => (
    <NavLink 
    to={`${item.href}`} 
          key={item.name}
      className={({ isActive }) =>
        `-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold ${
          isActive ? "text-purple-500" : "text-gray-800"
        } hover:bg-gray-300`
      }
    >
      {item.name}
    </NavLink>
  ))}  
        </div>

        <div className=" absolute  bottom-5">
            <div className="flex gap-x-3 text-lg hover:text-purple-500">
           <span><i class="fa-solid fa-gear"></i></span> 
           <span>Settings</span>
            </div>
        </div>
            </nav>
);
}  