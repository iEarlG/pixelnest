import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
// @ts-ignore
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import jswonwebtoken from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: "",
            clientSecret: ""
        })
    ],
    jwt: {
        encode: ({ secret, token }) => {
            
        },
        decode: async ({ secret, token }) => {

        },
    },
    theme: {
        colorScheme: "dark",
        logo: '/logo.png'
    },
    callbacks: {
        async session({ session }) {

        },
        async signIn({ user }) {
            
        }
    }
};