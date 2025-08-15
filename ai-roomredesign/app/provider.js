"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "./_context/UserDetailContext";

function Provider({ children }) {
  const { user, isLoaded } = useUser();
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    if (isLoaded && user) {
      verifyUser();
    }
  }, [isLoaded, user]);

  const verifyUser = async () => {
    try {
      const res = await axios.post("/api/verify-user", {
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        imgUrl: user.imageUrl,
      });

      console.log("API Response:", res.data.result);
      setUserDetail(res.data.result);
    } catch (error) {
      console.error("Verify user failed:", error);
    }
  };

  useEffect(() => {
    if (userDetail) {
      console.log("User Detail Updated:", userDetail);
    }
  }, [userDetail]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default Provider;
