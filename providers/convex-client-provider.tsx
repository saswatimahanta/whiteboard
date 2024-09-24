"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { AuthLoading, ConvexReactClient } from "convex/react"
import { Authenticated, Unauthenticated, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { Loading } from "@/components/auth/loading"
import { Button } from "@/components/ui/button"
import { SignInPage } from "@/components/auth/sign-in-page"

interface ConvexClientProviderProps {
    children: React.ReactNode;
}
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export const ConvexClientProvider = ({
    children,
}: ConvexClientProviderProps) => {
    return (
        <ClerkProvider publishableKey="pk_test_ZmxleGlibGUtbG9ic3Rlci05Ni5jbGVyay5hY2NvdW50cy5kZXYk">
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <Unauthenticated>
                   <SignInPage/>
                </Unauthenticated>
                <AuthLoading>
                    <Loading/>
                </AuthLoading>
                <Authenticated>
                    {children}
                </Authenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}