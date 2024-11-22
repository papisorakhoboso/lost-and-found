import { HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function MenuTitle() {
    return (
        <h5 className="flex items-center gap-1 font-extrabold">
            
            <Link href="/business-dashboard" className="flex items-center gap-2">
                <HeartHandshake className="text-primary"size={"35"}/>
                Lost and found
            </Link>
        </h5>
    );
} 