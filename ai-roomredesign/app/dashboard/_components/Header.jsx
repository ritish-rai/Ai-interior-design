"use client";

import { UserButton } from "@clerk/nextjs";
import React, { useContext } from "react";
import Image from "next/image";
import { UserDetailContext } from "../../_context/UserDetailContext";
import { Button } from "@/components/ui/button";


function Header() {
  const { userDetail } = useContext(UserDetailContext);

  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} width={40} height={40} alt="Logo" />
        <h2 className="font-bold text-lg">AI Room Design</h2>
      </div>
      <Button variant="ghost" className="rounded-full text-primary">Buy More Credits</Button>

   

      <div className="flex gap-7 items-center">
        <div className="flex gap-2 items-center bg-slate-200 px-3 rounded-full">
          <Image src={"/star.png"} width={20} height={20} alt="Star" />
          <h2>{userDetail ? userDetail.credits : 0}</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
