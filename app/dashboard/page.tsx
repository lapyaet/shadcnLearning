import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import EmployeesStats from "./components/employees/EmployeesStats";
import TeamsStats from "./components/teams/TeamStats";

const DashboardPage = () => {
  return (
    <Tabs defaultValue="employees">
      <TabsList>
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
