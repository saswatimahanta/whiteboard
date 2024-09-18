"use client";

import { ReactNode } from "react";
import { LiveblocksProvider, RoomProvider } from "@liveblocks/react";
import { ClientSideSuspense } from "@liveblocks/react";

interface RoomProps {
    children: ReactNode
    roomId: string;
    fallback: NonNullable<ReactNode> | null;
};

export const Room = ({
    children,
    roomId,
    fallback,
}: RoomProps) => {
    return (
        <LiveblocksProvider publicApiKey="pk_dev_LWHyC7TD3ruZ_mSzSDysIvACQyrybnH4Lqla6lm3ZhdMX50VKK46d77Ujwb5IGYw">
            <RoomProvider id={roomId} initialPresence={{}}>
                <ClientSideSuspense fallback={fallback}>
                    {()=> children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}