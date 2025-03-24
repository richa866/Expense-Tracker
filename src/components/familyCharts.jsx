
import { Provider, useSelector } from 'react-redux';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import store from '../store/store';




export default function FamilyCharts({graph}) {
  const rows=useSelector(state=> state.rows.famRows)

 


const totalDataByTag=Object.values(rows.reduce((acc, { tag, amt }) => {
  //objects value because it converts acc into an arr(new thig )
    if (!tag) return acc; 

    if (!acc[tag]) {
      acc[tag] = { tag, amt: 0 }; 
    }

    acc[tag].amt += amt; 
    return acc;
  }, {}))

  const totalDataByPer=Object.values(rows.reduce((acc, { by, amt }) => {
      if (!by) return acc; 
  
      if (!acc[by]) {
        acc[by] = { by, amt: 0 }; 
      }
  
      acc[by].amt += amt; 
      return acc;
    }, {}))

    const graphChange=()=>{
        if(graph==="tag"){
             return totalDataByTag;
        }
        else{
             return totalDataByPer;
        }
          }
    return (
        <div className="w-full h-[300px]">
      <ResponsiveContainer width="90%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={graphChange()}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={graph === "tag" ? "tag" : "by"} />
          <YAxis  dataKey="amt"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="amt" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
  
}
