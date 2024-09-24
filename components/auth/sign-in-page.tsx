"use client";

import { SignInButton } from "@clerk/nextjs";
import girl from "../../public/Chibi Anime Girl DPs_ Adorable & Fun 1.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { CheckCircle2, LucideGithub } from "lucide-react";
import {LinkedInLogoIcon, GitHubLogoIcon} from "@radix-ui/react-icons"
import Link from "next/link";

export const SignInPage = () => {
    return (
        <div style={{backgroundColor: "#FCFEFD", height: "100vh"}}>
            <Image
                src={girl}
                alt="girl"
                height={750}
                className="absolute bottom-[0] right-[108px]"
            />
            <div style={{background: "transparent", width: "43rem", translate: "14rem 17rem"}}>
                <div>
                    <div>Welcome to</div>
                    <div style={{fontSize: "8rem", marginTop: "-2rem"}}>Whiteboard</div>
                </div>
                <div style={{fontSize: "13px"}}>
                    <div>
                        Hi, I am a Frontend Developer. This is one of my personal projects where I have built a basic whiteboard with NextJS, Tailwind CSS and Shadcn UI for frontend, and Convex tool for backend.
                    </div>
                    <div style={{marginBottom: "2.5rem"}}>
                        <div style={{marginTop: "0.6rem", display: "flex", alignItems: "center", gap: "8px"}}><CheckCircle2 height={20}/>Toolbar with Text, Shapes, Sticky Notes, and Pencil</div>
                        <div style={{marginTop: "0.6rem", display: "flex", alignItems: "center", gap: "8px"}}><CheckCircle2 height={20}/>icon: Multiple users can collaborate in real-time</div>
                    </div>
                    <div style={{width: "100%", gap: "44px", alignItems: "center"}} className="flex">
                        <SignInButton>
                            <Button>Sign in</Button>
                        </SignInButton>
                        <div style={{gap: "14px"}} className="flex">
                            <Link href="https://www.linkedin.com/in/saswati-somya-mahanta/">
                                <LinkedInLogoIcon height={25} width={25}/>
                            </Link>
                            <Link href="https://github.com/Saswati1701">
                                <GitHubLogoIcon height={25} width={25}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}