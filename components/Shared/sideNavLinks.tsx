"use client";
import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { IoExtensionPuzzle } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { FaMedal } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import Link from "next/link";
const SideNavLinks = () => {
  const sideBarlist = [
    {
      name: "lesson",
      icon: FaBookReader,
    },
    {
      name: "leaderboard",
      icon: FaMedal,
    },
    {
      name: "dashboard",
      icon: MdSpaceDashboard,
    },
    {
      name: "exercise",
      icon: IoExtensionPuzzle,
    },
  ];
  const pathname = usePathname();
  const isActive = (path: string) => `/${path}` === pathname;
  console.log(isActive);
  return (
    <div className="flex gap-2 flex-col px-3 pt-5 mr-16">
      {sideBarlist.map((item) => (
        <Link key={item.name} href={`/${item.name}`}>
          <div
            className={
              isActive(item.name)
                ? "bg-blue-400 border-blue-500 rounded-lg border-2 font-semibold pl-2 flex flex-row  gap-2 items-center py-1"
                : " flex flex-row  gap-2 items-center hover:bg-blue-100 pl-2 py-1 hover:font-semibold hover:border-2 hover:border-blue-500 rounded-lg"
            }
          >
            <item.icon />
            <span className=" text-xl capitalize ">{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideNavLinks;
