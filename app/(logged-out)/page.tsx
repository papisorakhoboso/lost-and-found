import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";
export default function LandingPage() {
   return(
    <>
       <div className="text-center">
        <HeartHandshake className="text-blue-600 mx-auto" size={50} />
        <h1 className="text-xl font-bold">Lost and Found</h1>
        <small className="text-gray-600">
          The best Lesotho online Lost and Found platform
        </small>
        <div className="flex gap-2 items-center justify-center mt-4">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <span>or</span>
          <Button asChild variant="outline">
            <Link href="/create-account">Create Account</Link>
          </Button>
          <div className="fixed bottom-0 w-full text-center py-2 bg-gray-100">
          <small className="text-xs text-gray-700">All rights reserved 2024 Lost and Found</small>
          </div>
        </div>
      </div>        
    </>
   );
}