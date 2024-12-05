'use client';

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Loading from "./loading";
import DataTable from "@/components/ui/data-table";
// import { ColumnDef } from "@tanstack/react-table";
import { columns,User } from "./columns";



export default function UserManagement() {
  const [businessUsers, setBusinessUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      setBusinessUsers([
        {
          id: 1,
          username: "LMPS Maseru Central",
          phone: "58408084",
          isStatusActive: true,
          last_seen: "2024-10-01",
        },
        {
          id: 2,
          username: "LMPS_Pitso Ground",
          phone: "58408084",
          isStatusActive: false,
          last_seen: "2024-10-02",
        },
        {
          id: 1,
          username: "LMPS_Lithoteng",
          phone: "58408084",
          isStatusActive: true,
          last_seen: "2024-10-01",
        },
        {
          id: 2,
          username: "LMPS_Morija",
          phone: "58408084",
          isStatusActive: true,
          last_seen: "2024-10-02",
        },
        {
          id: 1,
          username: "LMPS Mokhalinyane",
          phone: "58408084",
          isStatusActive: true,
          last_seen: "2024-10-01",
        },
        {
          id: 2,
          username: "LMPS_Mofoka",
          phone: "58408084",
          isStatusActive: true,
          last_seen: "2024-10-02",
        },
        {
          id: 1,
          username: "LMPS_Fight_One",
          phone: "58408084",
          isStatusActive: true,
          last_seen: "2024-10-01",
        },
        {
          id: 2,
          username: "LMPS_Thetsane",
          phone: "58408084",
          isStatusActive: true,
          last_seen: "2024-10-02",
        }, 
      ]);
    };

    fetchData();
  }, []);

  return (
    <div>
      {businessUsers ? (
        <Card>
          <CardHeader className="py-3 font-extrabold"></CardHeader>
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
