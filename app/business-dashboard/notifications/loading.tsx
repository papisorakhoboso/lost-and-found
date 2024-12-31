import { Card, CardHeader,CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <Card className="mt-2">
              <CardHeader className="py-3 font-extrabold">Notifications</CardHeader>
                <div>
                    <Skeleton className="h-10 dark:bg-slate-800 bg-slate-200 mx-6 mb-4" />
                </div>
                <div className="flex justify-between">
                    <Skeleton className="h-5 w-5 dark:bg-slate-800 bg-slate-200 mx-6 mb-2" />
                    <Skeleton className="justify-end h-8 w-40 dark:bg-slate-800 bg-slate-200 mx-6 mb-4" />
                </div>
                <CardContent className="grid grid-cols-[20px_40px_1fr_1fr_1fr_60px] gap-4 items-center">
                    
                    <Skeleton className="h-5 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-10 rounded-full dark:bg-slate-800 bg-slate-200" />
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    
                    <Skeleton className="h-5 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-10 rounded-full dark:bg-slate-800 bg-slate-200" />
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>

                    <Skeleton className="h-5 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-10 rounded-full dark:bg-slate-800 bg-slate-200" />
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    <Skeleton className="h-10 w-full dark:bg-slate-800 bg-slate-200"/>
                    
                </CardContent>
        </Card>
    );
}