"use client";

import "./sign-in-page.css";
import { SignInButton } from "@clerk/nextjs";
import girl from "../../public/Chibi Anime Girl DPs_ Adorable & Fun 1.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import {LinkedInLogoIcon, GitHubLogoIcon} from "@radix-ui/react-icons"
import Link from "next/link";

export const SignInPage = () => {
    return (
        <div className="main_container">
            <Image
                src={girl}
                alt="girl"
                className="girl_image"
            />
            <div className="content_container">
                <div>
                    <div className="heading">Whiteboard</div>
                </div>
                <div className="text_container">
                    <div>
                        Hi, I am a Frontend Developer. This is one of my personal projects where I have built a basic whiteboard with NextJS, Tailwind CSS and Shadcn UI for frontend, and Convex tool for backend.
                    </div>
                    <div className="bullet-point_container">
                        <div className="bullet-point"><CheckCircle2 height={20}/>Toolbar with Text, Shapes, Sticky Notes, and Pencil</div>
                        <div className="bullet-point"><CheckCircle2 height={20}/>Multiple users can collaborate in real-time</div>
                    </div>
                    <div className="cta-buttons">
                        <SignInButton>
                            <Button>Sign in</Button>
                        </SignInButton>
                        <div className="socials">
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