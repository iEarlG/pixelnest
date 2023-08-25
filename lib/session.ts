import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
// @ts-ignore
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import jswonwebtoken from "jsonwebtoken";

import { SessionInterface, UserProfile } from "@/types/common";
import { createUser, getUser } from "@/action/actions";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
        })
    ],
    jwt: {
        encode: ({ secret, token }) => {
            const encodedToken = jswonwebtoken.sign({
                ...token,
                iss: "grafbase",
                exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7) // 1 week
            }, secret);

            return encodedToken;
        },
        decode: async ({ secret, token }) => {
            const decodedToken = jswonwebtoken.verify(token!, secret) as JWT;

            return decodedToken;
        },
    },
    theme: {
        colorScheme: "dark",
        logo: '/logo.png'
    },
    callbacks: {
        async session({ session }) {
            const email = session?.user?.email as string;

            try {
                const data = await getUser(email) as { user?: UserProfile };

                const newSession = {
                    ...session,
                    user: {
                        ...session.user,
                        ...data?.user
                    }
                }
                
                return newSession;
            } catch (error) {
                console.log("Error at callbacks session, 'user error'",error);

                return session;
            }
        },
        async signIn({ user }: { user: AdapterUser | User }) {
            try {
                const userExists = await getUser(user?.email as string) as { user?: UserProfile };

                if (!userExists.user) {
                    await createUser(
                        user.name as string,
                        user.email as string,
                        user.image as string
                    );
                }

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