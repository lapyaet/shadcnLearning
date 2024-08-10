"use client";

import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import MenuTitle from "./components/MenuTitle";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hook/use-media-query";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className=" grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && (
        <div className="p-4 max-h-[73px] flex justify-between items-center md:hidden sticky top-0 left-0 bg-background border-b border-border">
          <MenuTitle />
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onOpenChange={(open) => {
              setMobileMenuOpen(open);
            }}
            onClose={() => setMobileMenuOpen(false)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className=" overflow-auto py-2 px-4">
        <h1 className="pb-4">Welecom back, Tom!</h1>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
