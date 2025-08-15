import { db } from "../../../config/db.js";
import { Users } from "../../../config/schema.js";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, imgUrl } = await req.json();

    if (!name || !email || !imgUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existingUser = await db.select().from(Users).where(eq(Users.email, email));

    if (existingUser.length === 0) {
      const [newUser] = await db
        .insert(Users)
        .values({ name, email, imgUrl })
        .returning();

      return NextResponse.json({ result: newUser, message: "User created" });
    }

    return NextResponse.json({ result: existingUser[0], message: "User already exists" });
  } catch (error) {
    console.error("Error in verify-user:", error);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}
