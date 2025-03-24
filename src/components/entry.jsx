import Row from "./row";
import { useState } from "react";
import { addRow } from "../features/dash/expenseSlice";
import { useSelector,useDispatch } from "react-redux";



export default function ExpenseTable({category}){

  const dispatch = useDispatch();
  const rows = useSelector((state) =>
    category === "per" ? state.rows.rows : state.rows.famRows
  );
  console.log("category",category)
  console.log("Redux Rows:", rows);

 const [expense, setExpense] = useState("");
    const [amt, setAmt] = useState("");
    const [by, setBy] = useState("");
    const [date, setDate] = useState("");
    const [tag,setTag]=useState("");
    const [selectedCategory, setSelectedCategory]=useState(category)

  const createNewRow=()=>{
    const newRow = {
      expense,
      amt,
      by,
      date,
      tag,
      category:selectedCategory,
    };

    dispatch(addRow(newRow));
    setBy("");
  setExpense("");
    setAmt("");
    setDate("");
    setTag("");
    setSelectedCategory(category)
  }
    return(
        <>
        <div className="grid m-10 gap-y-5">
            <div className="hover:text-purple-500">
            <button onClick={createNewRow}>
             <i class="fa-solid fa-plus"></i>
             </button>
            </div>
            
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Expense</th>
        <th>Amt</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>


    <tbody>
    {rows.map((row) => (
              <Row
                key={row.id}
                id={row.id}
                expense={row.expense}
                by={row.by}
                amount={row.amt}
                tag={row.tag}
                date={row.date}
                category={row.category}
              />
            ))}
    </tbody>  
  </table>
</div>

            </div>
        
        </>
    );
}