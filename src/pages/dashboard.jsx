import DashMenu from "../components/DashMenu.jsx";
import DashNav from "../components/DashNav.jsx";
import ExpenseTable from "../components/entry.jsx";
import { Provider } from "react-redux";
import store from "../store/store";
import Chart from "../components/ChartSec.jsx";

export default function Dashboard(){
    return(
        <Provider store={store}>
        <div className="flex">
<div className="">
    <DashMenu/>
</div>
<div className="w-full ">
    <DashNav/>
    <ExpenseTable category={"per"}/>
<Chart/>
</div>
        </div>
        </Provider>
    );

}