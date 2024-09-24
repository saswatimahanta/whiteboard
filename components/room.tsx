"use client";

import { ReactNode, useEffect } from "react";
// import { LiveblocksProvider, RoomProvider } from "@liveblocks/config";
import { LiveblocksProvider } from "@liveblocks/react";
import { RoomProvider } from "@/liveblocks.config";

import { ClientSideSuspense } from "@liveblocks/react";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { Layer } from "@/types/canvas";
import { useStorage } from "@/liveblocks.config";

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
        <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
            <RoomProvider 
                id={roomId} 
                initialPresence={{ 
                    cursor: null,
                    selection: [],
                    pencilDraft: null,
                    penColor: null,
                }}
                initialStorage={{
                    layers: new LiveMap<string, LiveObject<Layer>>(),
                    layerIds: new LiveList([]),
                }}
            >
                <ClientSideSuspense fallback={fallback}>
                    {()=> children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}