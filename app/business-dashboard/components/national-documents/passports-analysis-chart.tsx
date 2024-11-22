"use client";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
export default function PassportsAnalysisChart() {
    const data = [
        {
            condition : "Maseru",
            value : 57,
            color : "#0088FE"
        },
        {
            condition : "Unrecovered",
            value : 147,
            color : "#00C49F"	        
        },
        
    ]
    return(
       <ResponsiveContainer className="" width="100%" height={165} >
            <PieChart >
                <Tooltip/>
                <Pie data={data} dataKey="value" nameKey="condition" stroke="none">
                    {data.map((dataItem, i )=> (
                        <Cell key={i} fill={dataItem.color}
                        />
                    ))}
                </Pie>
            </PieChart>
       </ResponsiveContainer>
    );
}