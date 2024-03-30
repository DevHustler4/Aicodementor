import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import GoogleProvider from "@auth/core/providers/google";
import GithubProvider from "@auth/core/providers/github";
// const credentialsConfig = CredentialsProvider({
//   name: "Credentials",
//   credentials: {
//     username: {
//       label: "User Name",
//     },
//     password: {
//       label: "Password",
//       type: "password",
//     },
//   },
//   async authorize(credentials) {
//     if (credentials.username === "sk" && credentials.password === "123")
//       return {
//         name: "Vahid",
//       };
//     else return null;
//   },
// });

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
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middlewareProtected") return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
