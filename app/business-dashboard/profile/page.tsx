"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { InfoIcon, KeySquareIcon, ShieldEllipsisIcon, Trash2Icon, UserCogIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileGeneral from "../components/profile-general/page";
import UserManagement from "../components/user-management/page";
import ChangePassword from "../components/change-password/page";
import Security from "../components/security/page";

export default function ProfilePage() {
  
  return (
    <>
 
      <div>
          <Card>
              <CardHeader className="py-3 font-extrabold">Profile Management</CardHeader>
                <CardContent>
                  <Tabs defaultValue="general" className="w-full">
                    {/* Container for TabsList and Button */}
                    <div className="flex items-center justify-between mb-4">
                      <TabsList>
                          <TabsTrigger value="general" className="flex items-center gap-2 data-[state=active]:font-semibold data-[state=active]:text-primary">
                            <InfoIcon className="h-4 w-4 text-current" /> General Information
                          </TabsTrigger>
                          <TabsTrigger value="user-manage" className="flex items-center gap-2 data-[state=active]:font-semibold data-[state=active]:text-primary">
                            <UserCogIcon className="h-4 w-4 text-current" /> User Management
                          </TabsTrigger>
                          <TabsTrigger value="change-password" className="flex items-center gap-2 data-[state=active]:font-semibold data-[state=active]:text-primary">
                            <KeySquareIcon className="h-4 w-4 text-current" /> Change Password
                          </TabsTrigger>
                          <TabsTrigger value="security" className="flex items-center gap-2 data-[state=active]:font-semibold data-[state=active]:text-primary">
                            <ShieldEllipsisIcon className="h-4 w-4 text-current" /> Security
                          </TabsTrigger>
                        </TabsList>
                      {/* Button aligned to the right */}
                      <Button className="ml-auto bg-red-700 dark:text-white" size="sm"><Trash2Icon/> Delete Account</Button>
                    </div>
                    {/* Tabs Content */}
                    <TabsContent value="general">
                        <ProfileGeneral/>
                    </TabsContent>
                    <TabsContent value="user-manage">
                        <UserManagement/>
                    </TabsContent>
                    <TabsContent value="change-password">
                        <ChangePassword/>
                    </TabsContent>
                    <TabsContent value="security">
                        <Security/>
                    </TabsContent>
                 
                  </Tabs>
                </CardContent>
          </Card>
      </div>
    </>
  );
}
