import SideBar from "@/components/Shared/Sidebar";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex gap-5 ${poppins.className}`}>
      <SideBar />
      {children}
    </div>
  );
};

export default layout;
