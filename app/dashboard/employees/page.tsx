import React from "react";
import { setTimeout } from "timers/promises";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EmployeesPage = async () => {
  await setTimeout(1000);
  const data = [
    {
      id: 1,
      firstName: "Colin",
      lastName: "Murrary",
      avator: "/employee.webp",
      isTeamLeader: false,
      teamName: "alpha",
    },
    {
      id: 2,
      firstName: "Liam",
      lastName: "Fuentes",
      isTeamLeader: true,
      teamName: "alpha",
    },
    {
      id: 3,
      firstName: "Tina",
      lastName: "Fey",
      isTeamLeader: false,
      teamName: "alpha",
    },
    {
      id: 4,
      firstName: "Katie",
      lastName: "Johnson",
      avator: "/glass.jpeg",
      isTeamLeader: false,
      teamName: "alpha",
    },
    {
      id: 5,
      firstName: "Tina",
      lastName: "Jones",
      isTeamLeader: true,
      teamName: "alpha",
    },
    {
      id: 6,
      firstName: "Tom",
      lastName: "Phillips",
      isTeamLeader: false,
      teamName: "alpha",
    },
    {
      id: 7,
      firstName: "Colin",
      lastName: "Murrary",
      isTeamLeader: true,
      teamName: "alpha",
    },
    {
      id: 1,
      firstName: "Jenny",
      lastName: "Jones",
      avator: "/happy.png",
      isTeamLeader: false,
      teamName: "alpha",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead>First name</TableHead>
              <TableHead>Last name</TableHead>
              <TableHead>Team</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Avatar>
                    {!!employee.avator && (
                      <AvatarImage
                        src={employee.avator}
                        alt={`${employee.firstName}${employee.lastName}`}
                      />
                    )}
                    <AvatarFallback>
                      {employee.firstName[0]}
                      {employee.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.teamName}</TableCell>
                {employee.isTeamLeader && (
                  <TableCell>
                    <div>
                      <span>team leader</span>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EmployeesPage;
