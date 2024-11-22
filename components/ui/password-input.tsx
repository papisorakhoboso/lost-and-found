"use client";
import * as React from "react"
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { cn } from "@/lib/utils"

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ( {className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="relative">
         <Input type={showPassword ? "text" : "password"} {...props} ref = {ref} className={cn("pr-10", className)}/>
         <span className="absolute top-[11px] right-2 cursor-pointer select-none">
            {showPassword ? <EyeIcon onClick={() => setShowPassword(false)} size={"18"}/> : <EyeOffIcon onClick={() => setShowPassword(true)} size={"18"}/>}
         </span>
      </div>
    );
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
