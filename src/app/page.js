// src/app/page.js
"use client";
import React, { useEffect } from "react";
import Experience from "@/components/Experience";
import Personal from "@/components/Personal";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import { useRouter, useSearchParams } from "next/navigation"; // Use next/navigation for app directory
import userData from "./data/userData.json";

export default function Home() {
  const router = useRouter();

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
