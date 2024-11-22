"use client"
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

type Props = {
    className?:string;
}

export function LightDarkToggle({className}:Props){
    const [isLightMode, setIsLightMode] = useState(true);
    return(
        <TooltipProvider>
           <Tooltip> 
              <TooltipTrigger className={className} onClick={() =>{
                 setIsLightMode(prevValue => !prevValue);
                 document.body.classList.toggle("dark");
              }}>
                 {isLightMode ?<SunIcon/> : <MoonIcon/>}
              </TooltipTrigger>
              <TooltipContent>
                 {isLightMode ? "Enable dark mode":"Enable light mode"}
              </TooltipContent>
           </Tooltip>
        </TooltipProvider>
    );
}