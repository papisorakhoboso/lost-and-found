"use client";

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function LossRecoveryChart() {
    const data = [
       {
           name : "Jan",
           lost : 10,
            recovered : 6
       },
       {
            name : "Feb",
            lost : 12,
            recovered : 7
       }, 
        {
            name : "Mar",
            lost : 13,
            recovered : 10
        },
        {
            name : "Apr",
            lost : 11,
            recovered : 7
        }, 
        {
            name : "May",
            lost : 13,
            recovered : 9
        }, 
        {
            name : "Jun",
            lost : 10,
            recovered : 8
        }, 
        {
            name : "Jul",
            lost : 12,
            recovered : 11
        },
        {
            name : "Aug",
            lost : 8,
            recovered : 2
        },
        {
            name : "Sep",
            lost : 14,
            recovered : 12
        }, 
        {
            name : "Oct",
            lost : 14,
            recovered : 9
        },
        {
            name : "Nov",
            lost : 16,
            recovered : 12
        },
        {
            name : "Dec",
            lost : 17,
            recovered : 9
        } 
    ]
    return( 
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800">
            <XAxis dataKey="name" fontSize={12}/>
            <YAxis fontSize={12}/>
            <Tooltip separator=": " 
            formatter={(value, name) => {
                if(name === "lost"){
                    return[value,"Lost"]
                }
                else if(name === "recovered"){
                    return[value,"Recovered"]
                }
            }}
            labelClassName="font-bold"
            wrapperClassName="!text-xs font-light dark:!bg-black rounded-md dark:!border-border"/>
            <Legend iconType="circle" formatter={(value) =>{
                if(value === "lost"){
                    return(
                        <div className="text-sm">Lost documents</div>
                    );
                }
                else if(value === "recovered"){
                    return(
                        <div className="text-sm">Recovered documents</div>
                    );
                }
            }}/>
            <Bar dataKey="recovered" stackId={1} fill="#2563eb"/>
                <Bar dataKey="lost" stackId={2} fill="#a7b0bc" radius={[4,4,0,0]}/>    
            </BarChart>
        </ResponsiveContainer>
    );
}