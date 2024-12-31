'use client';

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Loading from "./loading";
import DataTable from "@/components/ui/data-table-notification";
// import { ColumnDef } from "@tanstack/react-table";
import { columns,Notification } from "./columns";

export default function UserManagement() {
  const [businessUsers, setBusinessUsers] = useState<Notification[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      setBusinessUsers([
        {
          // id: 1,
          isAlert: true,
          heading: "System Maintainance",
          message: "On 2023-Jan-01 10:00 AM there will be mainta...", 
          time: "Today 09:20",
        },
        {
          isAlert: false,
          heading: "Holiday Break",
          message: "You are remainded that our support team will...",
          time: "Yesterday 10:05",
        },
        {
          isAlert: true,
          heading: "Passport Collection",
          message: "All expired passport will be collected from...",
          time: "27 October 2024 19:28",
        },
        {
          isAlert: false,
          heading: "National ID Coll...",
          message: "All expired IDs will be collected from...",
          time: "15 December 2024 12:03",
        },
        {
          isAlert: true,
          heading: "Yearly Recovery Awards",
          message: "You are kindly requested to attend yea...",
          time: "20 December 2024 11:08",
        },
        {
          // id: 6,
          isAlert: false,
          heading: "LMPS_Mofoka",
          message: "58408084",
          time: "2024-10-02",
        },
        {
          // id: 7,
          isAlert: true,
          heading: "LMPS_Fight_One",
          message: "58408084",
          time: "2024-10-01",
        },
        {
          // id: 8,
          isAlert: true,
          heading: "LMPS_Thetsane",
          message: "58408084",
          time: "2024-10-02",
        }, 
      ]);
    };

    fetchData();
  }, []);

  return (
    <div>
      {businessUsers ? (
        <Card className="mt-2">
          <CardHeader className="py-3 font-extrabold">Notifications</CardHeader>
          <CardContent>
            {/* Render the DataTable inside CardContent */}
            <DataTable columns={columns} data={businessUsers} />
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          <Loading />
        </div>
      )}
    </div>
  );
}
