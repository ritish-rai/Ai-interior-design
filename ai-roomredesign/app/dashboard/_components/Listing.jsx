"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import EmptyState from './EmptyState';

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
        <Button>+ Redesign Room</Button>
      </div>

      {/* Conditional Rendering */}
      {userRoomList?.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          {/* Render room list here */}
        </div>
      )}
    </div>
  );
}

export default Listing;
