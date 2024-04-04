import React from "react";
import { auth, signIn } from "auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const LoginPage = () => {
  return (
    <>
      <div className="absolute  bottom-[20%] right-[37%] flex flex-col gap-7 z-10 ">
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button size={"lg"} className=" rounded-xl">
            Sign In With Google
          </Button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <Button
            size={"lg"}
            className=" rounded-xl bg-slate-800 hover:bg-slate-900"
          >
            Sign In With Github
          </Button>
        </form>
      </div>
      <div className="relative min-w-screen h-screen z-0">
        <Image src="/main.jpeg" alt="logo" fill={true} />
      </div>
    </>
  );
};

export default LoginPage;
