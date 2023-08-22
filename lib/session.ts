import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
// @ts-ignore
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import jswonwebtoken from "jsonwebtoken";

import { SessionInterface } from "@/types/common";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
        })
    ],
    // jwt: {
    //     encode: ({ secret, token }) => {
            
    //     },
    //     decode: async ({ secret, token }) => {

    //     },
    // },
    theme: {
        colorScheme: "dark",
        logo: '/logo.png'
    },
    callbacks: {
        async session({ session }) {
            return session;
        },
        async signIn({ user }: { user: AdapterUser | User }) {
            try {
                // get the users if they exist

                // if they don't exist, we create them

                // return true if they exist or were created successfully
                return true;

            } catch (error: any) {
                console.log(error);

                return false;
            }
        }
    }
}

export async function getCurrentUsers() {
    const session = await getServerSession(authOptions) as SessionInterface;

    return session;
};