// src/app/HomeContent.js (or src/components/HomeContent.js)
"use client";

import React from "react";
import Experience from "@/components/Experience";
import Personal from "@/components/Personal";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import { useSearchParams } from "next/navigation";
import userData from "../app/data/userData.json";

export default function HomeContent() {
    const searchParams = useSearchParams();
    const section = searchParams.get("section") || "profile";

    let content;
    switch (section) {
        case "experience":
            content = <Experience userData={userData} />;
            break;
        case "skills":
            content = <Skills userData={userData} />;
            break;
        case "personal":
            content = <Personal userData={userData} />;
            break;
        default:
            content = <Profile userData={userData} />;
            break;
    }

    return <div>{content}</div>;
}
