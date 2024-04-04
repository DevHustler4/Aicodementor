import React from "react";
import { auth, signOut } from "auth";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import { GiTwoCoins } from "react-icons/gi";
import { Separator } from "@/components/ui/separator";

const DashBoard = async () => {
  const session = await auth();
  return (
    <div className="mx-auto mt-7">
      <div className="flex justify-between mx-5 items-center">
        {session && session?.user && (
          <div className="flex gap-2 flex-col items-center">
            {session?.user?.image ? (
              <Image
                className="rounded-full"
                src={session.user.image}
                alt="user image"
                width={80}
                height={80}
              />
            ) : (
              <Image
                className="rounded-full"
                src="fakeman.png"
                alt="user image"
                width={80}
                height={80}
              />
            )}
          </div>
        )}
        <div className="flex gap-7 ">
          <div className="flex flex-col  items-center ">
            <p className="text-2xl">4</p>
            <span className="text-xl">Level</span>
          </div>
          <div className="flex flex-col items-center ">
            <p className="text-2xl">41</p>
            <span className="text-xl">Followers</span>
          </div>
          <div className="flex flex-col items-center ">
            <p className="text-2xl">5</p>
            <span className="text-xl">Following</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mx-5">
        <div className="ml-3 my-4">
          <p className="text-xl">{session?.user?.name}</p>
          <span className="font-semibold">Javascript</span> Learner
          <p className="flex gap-2 items-center">
            <FaEdit /> Edit profile
          </p>
        </div>
        <div className="px-5 bg-blue-600 rounded-xl py-2 text-gray-100 text-xl">
          Follow
        </div>
      </div>
      <Separator />

      <h1 className="text-3xl my-4">stats</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-2 ring-2 ring-blue-500  rounded-lg px-6 py-3">
          <div className="flex gap-2 items-center">
            <GiTwoCoins className="font-semibold text-2xl" />
            <span className="font-semibold text-2xl text-blue-700">150</span>
          </div>
          <p className="text-xl">Total XP</p>
        </div>
        <div className="flex flex-col gap-2 ring-2 ring-blue-500  rounded-lg px-8 py-3">
          <div className="flex gap-2 items-center">
            <GiTwoCoins className="font-semibold text-2xl" />
            <span className="font-semibold text-2xl text-blue-700">150</span>
          </div>
          <p className="text-xl">Total XP</p>
        </div>
        <div className="flex flex-col gap-2 ring-2 ring-blue-500  rounded-lg px-8 py-3">
          <div className="flex gap-2 items-center">
            <GiTwoCoins className="font-semibold text-2xl" />
            <span className="font-semibold text-2xl text-blue-700">150</span>
          </div>
          <p className="text-xl">Total XP</p>
        </div>
        <div className="flex flex-col gap-2 ring-2 ring-blue-500  rounded-lg px-8 py-3">
          <div className="flex gap-2 items-center">
            <GiTwoCoins className="font-semibold text-2xl" />
            <span className="font-semibold text-2xl text-blue-700">150</span>
          </div>
          <p className="text-xl">Total XP</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
