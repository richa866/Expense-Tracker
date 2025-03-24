
import { Provider, useSelector } from 'react-redux';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import store from '../store/store';



export default function ChartDisplay() {
  const rows=useSelector(state=>state.rows.rows)
  

const totalData=Object.values(rows.reduce((acc, { tag, amt }) => {
  //objects value because it converts acc into an arr(new thig )
    if (!tag) return acc; 

    if (!acc[tag]) {
      acc[tag] = { tag, amt: 0 }; 
    }

    acc[tag].amt += amt; 
    return acc;
  }, {}))



    return (
     
      <ResponsiveContainer width="50%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={totalData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tag" />
          <YAxis  dataKey="amt"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="amt" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    
    );
  
}
