// 'use client';
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import Image from "next/image";
import { auth, signOut } from "auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import SideNavLinks from "./sideNavLinks";

const SideBar = async () => {
  const session = await auth();

  return (
    <div className="min-h-screen border-r-2 border-gray-200 w-1/5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          {session && session?.user && (
            <div className="flex justify-between gap-14 items-center mt-5 ml-5">
              <div className="flex gap-2 items-center">
                {session?.user?.image ? (
                  <Image
                    className="rounded-full"
                    src={session.user.image}
                    alt="user image"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    className="rounded-full"
                    src="fakeman.png"
                    alt="user image"
                    width={32}
                    height={32}
                  />
                )}
                <p>{session.user.name}</p>
              </div>
              <RiArrowDropDownLine className="size-8 font-normal" />
            </div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Points: <span className="text-blue-600 font-semibold"> 500 XP</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Level:<span className="text-blue-600 font-semibold"> 5</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:font-semibold">
            Setting
          </DropdownMenuItem>
          <DropdownMenuItem>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit" className="hover:font-semibold">
                Sign Out
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <SideNavLinks />

      <Image
        src="/logo.png"
        alt="logo"
        width={230}
        height={80}
        className="absolute bottom-3 -left-5"
      />
    </div>
  );
};

export default SideBar;
// 225EF8

// quiz, lesson, exercises, profile, leaderboard
