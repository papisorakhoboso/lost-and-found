import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookUserIcon, ChartColumnIcon, IdCardIcon } from "lucide-react";
import Link from "next/link";
import PassportsAnalysisChart from "./passports-analysis-chart";
import LossRecoveryChart from "./loss-recovery-chart";


export default function NationalDocuments() {
    return(
        <>
            <div className="grid lg:grid-cols-4 gap-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base flex justify-between items-center">
                            <span className="dark:font-bold font-extrabold">Passports</span>
                            <div className="flex flex-col">
                            <span className="text-xs font-normal">Collected : 120</span>
                            <span className="text-xs font-normal">Female : 20</span>
                        </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <BookUserIcon/>
                            <span className="text-5xl font-bold">13</span>
                        </div>
                        <div className="flex items-center gap-4">
                    
                        <Button asChild size="xs" className="text-white">
                            <Link href="/business-dashboard/manage-documents">View all</Link>
                        </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base flex justify-between items-center">
                            <span className="dark:font-bold font-extrabold">Identity Documents</span>
                            <div className="flex flex-col">
                            <span className="text-xs font-normal">Collected : 20</span>
                            <span className="text-xs font-normal">Female : 20</span>
                        </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <IdCardIcon/>
                            <span className="text-5xl font-bold">13</span>
                        </div>
                        <div className="flex items-center gap-4">
                    
                        <Button asChild size="xs" className="text-white">
                            <Link href="/">View all</Link>
                        </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base flex justify-between items-center">
                            <span className="dark:font-bold font-extrabold ">Driving Documents</span>
                            <div className="flex flex-col">
                            <span className="text-xs font-normal">Collected : 20</span>
                            <span className="text-xs font-normal">Female : 20</span>
                        </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <IdCardIcon/>
                            <span className="text-5xl font-bold">13</span>
                        </div>
                        <div className="flex items-center gap-4">
                    
                        <Button asChild size="xs" className="text-white">
                            <Link href="/">View all</Link>
                        </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-primary">
                    <PassportsAnalysisChart/>
                </Card>
            </div>
            <Card className="my-4">
                <CardHeader>
                    <CardTitle className="flex gap-2 text-base items-center">
                        <ChartColumnIcon/>
                        <span className="text-sm">Loss summary analysis</span>                   
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                    <LossRecoveryChart/>
                </CardContent>
            </Card>
        </>
    );
}