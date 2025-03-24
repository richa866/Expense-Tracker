import { useRef, useState } from "react";
import Rename from "./renameText";
import { useDispatch } from "react-redux";
import { updateRow,deleteRow } from "../features/dash/expenseSlice";
export default function Row({expense,amt,by,date,tag,id,category}){
  const dispatch=useDispatch();
  const handleDeletion=()=>{
    dispatch(deleteRow({ id,category }))
  }
  return(
    
    <tr>
        <th>
          <button onClick={handleDeletion}>
 
      <i className="fa-solid fa-xmark text-red-600"></i>
          </button>
        
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">
              <Rename  field="Expense" text={expense} onSave={(value)=>dispatch(updateRow({id,field:"expense",value,category}))}/>
                </div>
              <div className="text-sm opacity-50"> 
              <Rename field="by" text={by}  onSave={(value)=>dispatch(updateRow({id,field:"by",value,category}))}/>
              </div>
            </div>
          </div>
        </td>

        <td>
        <Rename   field="amt" text={amt}  onSave={(value)=>dispatch(updateRow({id,field:"amt",value,category}))}/>
        
          <br />
          <span className="badge badge-ghost badge-sm">
           <Rename   field="tag" text={tag}  onSave={(value)=>dispatch(updateRow({id,field:"tag",value:value.toLowerCase(),category}))} />
          </span>
        </td>
        <td><Rename  field="date" text={date}  onSave={(value)=>dispatch(updateRow({id,field:"date",value,category}))}/></td>
      </tr>
      
);
}