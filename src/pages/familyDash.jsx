import DashMenu from "../components/DashMenu.jsx";
import DashNav from "../components/dashNav.jsx";
import ExpenseTable from "../components/entry.jsx";
import { Provider } from "react-redux";
import store from "../store/store";
import FamilyChartSec from "../components/familyChartSec";
export default function FamilyDash(){
    return(
        <Provider store={store}>
        <div className="flex">
<div className="">
    <DashMenu/>
</div>
<div className="w-full">
    <DashNav/>
    <ExpenseTable category={"fam"}/>
    <FamilyChartSec/>
</div>
        </div>
        </Provider>
    );

}