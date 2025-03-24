import DashMenu from "../components/DashMenu";
import DashNav from "../components/dashNav";
import ExpenseTable from "../components/entry";
import { Provider } from "react-redux";
import store from "../store/store";
import Chart from "../components/ChartSec";

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