import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "@auth/core/providers/google";
import GithubProvider from "@auth/core/providers/github";
import { connectToDatabase } from "./lib/Mongodb";
import User from "./lib/Mongodb/Models/User.model";

const config = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ request, auth }) {
      const logged = !!auth;
      const { pathname } = request.nextUrl;
      const pro = pathname.startsWith("/");
      if (pro) {
        if (logged && pathname.startsWith("/signin")) {
          return Response.redirect(new URL("/lesson", request.nextUrl));
        }
        return !!auth;
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async signIn({ user }) {
      await connectToDatabase();
      const myresult = await User.findOne({ email: user.email });
      if (myresult) {
        return myresult;
      }
      const createUser = await User.create({
        name: user.name,
        email: user.email,
        image: user.image,
      });
      return createUser;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
