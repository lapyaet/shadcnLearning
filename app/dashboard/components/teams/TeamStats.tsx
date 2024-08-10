import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { ListCheckIcon, PieChartIcon, StarIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TeamDistributionChart from "./TeamDistributionChart";
import SupportTicketResolved from "./SupportTicketResolved";

const TeamsStats = () => {
  const teamLeaders = [
    {
      firstName: "Colin",
      lastName: "Murrary",
      avator: "/employee.webp",
    },
    {
      firstName: "Liam",
      lastName: "Fuentes",
    },
    {
      firstName: "Tina",
      lastName: "Fey",
    },
    {
      firstName: "Katie",
      lastName: "Johnson",
      avator: "/glass.jpeg",
    },
    {
      firstName: "Tina",
      lastName: "Jones",
    },
    {
      firstName: "Tom",
      lastName: "Phillips",
    },
    {
      firstName: "Colin",
      lastName: "Murrary",
    },
    {
      firstName: "Jenny",
      lastName: "Jones",
      avator: "/happy.png",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span> Team leaders</span>
              <StarIcon className=" text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamleader) => (
              <TooltipProvider
                key={`${teamleader.firstName}${teamleader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamleader.avator && (
                        <AvatarImage
                          src={teamleader.avator}
                          alt={`${teamleader.firstName}${teamleader.lastName}`}
                        />
                      )}
                      <AvatarFallback>
                        {teamleader.firstName[0]}
                        {teamleader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamleader.firstName} {teamleader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex gap-2 text-lg items-center">
            <ListCheckIcon />
            <span>Support ticket resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketResolved />
        </CardContent>
      </Card>
    </>
  );
};

export default TeamsStats;
