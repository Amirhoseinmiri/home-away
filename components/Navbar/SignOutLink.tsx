"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const SignOutLink = () => {
  const { toast } = useToast();
  const router = useRouter();
  const handleLogout = () => {
    toast({ description: "You have been signed out." });
    router.refresh();
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
