import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentUser } from "@clerk/nextjs/server";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
    secret: "sk_dev_g_jYuFufb8kHTVlN4mK5a7dqtyt65Gy96HrgvphMCB4uYwavk8nD0yybPPVl7oLC",
});

export async function POST(request: Request) {
    const authorization = await auth();
    const user = await currentUser();

    console.log("AUTH_INFO", {
        authorization, 
        user,
    })

    if(!authorization || !user) {
        return new Response("Unauthorized", {status: 403});
    }

    const { room } = await request.json();
    const board = await convex.query(api.board.get, {id: room});

    console.log("AUTH_INFO", {
        room, 
        board,
        boardOrgId: board?.orgId,
        userOrdId: authorization.orgId,
    })

    if(board?.orgId !== authorization.orgId) {
        return new Response("Unauthorized", { status: 403 });
    }

    const userInfo = {
        name: user.firstName || "Teammate",
        picture: user.imageUrl,
    }
    console.log({userInfo})
    const session = liveblocks.prepareSession(
        user.id,
        { userInfo: userInfo }
    )

    if(room) {
        session.allow(room, session.FULL_ACCESS);
    }
    
    const { status, body } = await session.authorize();
    console.log({status, body}, "ALLOWED")
    return new Response(body, { status });
}