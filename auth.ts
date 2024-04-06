import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "@auth/core/providers/google";
import GithubProvider from "@auth/core/providers/github";
import clientPromise from "./lib/Mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { User } from "./lib/Mongodb/Models/User.model";
import type { Adapter } from "@auth/core/adapters";

const config = {
  adapter: <Adapter>MongoDBAdapter(clientPromise),

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
    // async redirect({ url, baseUrl }) {
    //   return url.startsWith(baseUrl) ? url : baseUrl;
    // },
    async signIn({ user, account }): Promise<boolean> {
      if (!account || !user) {
        throw new Error("Invalid account or user data");
      }

      const client = await clientPromise;

      if (account.provider === "google") {
        try {
          const db = client.db("AiCodeMentor");
          const usersCollection = db.collection("users");
          const createUserResult = await usersCollection.insertOne({
            name: user.name,
            email: user.email,
            image: user.image,
            // Include any other user-related data you want to store
          });
          return !!createUserResult.insertedId;
        } catch (error) {
          console.error("Error creating user:", error);
          throw error; // Rethrow the error to be caught by the caller
        }
      } else {
        throw new Error("Unsupported account provider");
      }
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
