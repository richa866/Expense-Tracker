import { useState } from "react";
import FamilyCharts from "./familyCharts";

export default  function FamilyChartSec(){
    const[graph,setGraph]=useState("tag");
    const handleChangeGraph=()=>{
      if(graph==="tag"){
        setGraph("by");
      }
      else{
        setGraph("tag");
      }
    }
    
    return(
        <div className="flex flex-col w-full h-[400px]">
          <div className="ml-20">
          <button onClick={handleChangeGraph} className="btn btn-soft btn-primary mb-4">
          {graph === "tag" ? "By Person" : "By Tag"}
        </button>
          </div>
        
        <div className="w-full h-full flex items-center justify-center">
          <FamilyCharts graph={graph || "tag"} />
        </div>
      </div>
    );

}