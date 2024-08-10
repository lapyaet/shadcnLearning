import React from "react";
import MenuTitle from "./MenuTitle";
import MenuItem from "./MenuItem";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import LightDarkToggle from "@/components/ui/light-dark-toggle";
import { cn } from "@/lib/utils";

type link = {
  href: string;
  label: string;
};

const linkList: link[] = [
  {
    href: "/dashboard",
    label: "My dashboard",
  },
  {
    href: "/dashboard/teams",
    label: "Teams",
  },
  {
    href: "/dashboard/employees",
    label: "Employees",
  },
  {
    href: "/dashboard/account",
    label: "Account",
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
  },
];

const MainMenu = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("md:bg-muted overflow-auto p-4 flex-col", className)}>
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow list-none">
        {linkList.map((item: link) => (
          <MenuItem href={item.href} key={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className=" bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <Link href={"/"} className="underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
};

export default MainMenu;
