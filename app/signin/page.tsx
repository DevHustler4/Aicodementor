import React from "react";
import { auth, signIn } from "auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bg from "@/public/main.jpeg";
const SignIn = () => {
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
        <Image
          src="/main.jpeg"
          alt="logo"
          fill={true}
          //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </>
  );
};

export default SignIn;
