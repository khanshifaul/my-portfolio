// \api\contact\route.ts

import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import { messageSchema } from "@/schema/general-schema";

export async function POST(req: NextRequest) {
  try {
    // Parse and validate the request body
    const requestData = await req.json();
    const validatedData = messageSchema.parse(requestData);

    // Save contact form submission to the database
    await db.messages.create({
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in sending message:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to save message",
      },
      { status: 500 }
    );
  }
}
