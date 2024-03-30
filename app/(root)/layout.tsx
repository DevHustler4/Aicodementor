import SideBar from "@/components/Shared/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-5">
      <SideBar />
      {children}
    </div>
  );
};

export default layout;
