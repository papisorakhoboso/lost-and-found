import { Card, CardHeader,CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <Card>
              <CardHeader className="py-3 font-extrabold"></CardHeader>
                <div>
                    <Skeleton className="h-10   dark:bg-slate-800 bg-slate-200 mx-6 my-4" />
                </div>
                <CardContent className="grid grid-cols-[25px_1fr_1fr_1fr_1fr_50px_50px] gap-4 items-center">
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-8 w-full dark:bg-slate-800 bg-slate-200"/>
                    
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>

                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    
                </CardContent>
        </Card>
    );
}