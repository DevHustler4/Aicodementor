import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { auth, signIn } from "auth";
import SideBar from "@/components/Shared/Sidebar";
export default async function Home() {
  const session = await auth();
  return (
    <>
      {session && session?.user ? (
        <SideBar />
      ) : (
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
      )}
    </>
  );
}

// import { auth, signIn, signOut } from "auth";
// import Link from "next/link";
// import React from "react";

// export default async function Home() {
//   const session = await auth();
//   return (
//     <div className="p-2 bg-gradient-to-b from-slate-800 to-slate-600 flex gap-2 ">
//       <Link href={"/clientPage"}>Client Page</Link>
//       <Link href={"/serverPage"}>Server Page</Link>
//       <Link href={"/middlewareProtected"}>Middleware Protected Page</Link>
//       <div className="ml-auto">
//         {session && session.user ? (
//           <div className="flex gap-2">
//             <p>{session.user.name}</p>
//             <form
//               action={async () => {
//                 "use server";
//                 await signOut();
//               }}
//             >
//               <button type="submit">Sign Out</button>
//             </form>
//           </div>
//         ) : (
//           <>
//             <form
//               action={async () => {
//                 "use server";
//                 await signIn("google");
//               }}
//             >
//               <button type="submit">Sign In</button>
//             </form>
//             <form
//               action={async () => {
//                 "use server";
//                 await signIn("github");
//               }}
//             >
//               <button type="submit">Sign In</button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
