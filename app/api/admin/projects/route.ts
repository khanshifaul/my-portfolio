import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title, subtitle, githubLink, webLink, images, tags } =
      await req.json();

    // Validate required fields
    if (!title) {
      return NextResponse.json(
        { success: false, error: "Title is required" },
        { status: 400 }
      );
    }

    // Ensure arrays are processed properly
    const processedImages = images || [];
    const processedTags = tags || [];

    const project = await prisma.project.create({
      data: {
        title,
        subtitle: subtitle || "",
        githubLink: githubLink || null,
        webLink: webLink || null,
        images: processedImages,
        tags: {
          connectOrCreate: processedTags.map((tagName: string) => ({
            where: { name: tagName },
            create: { name: tagName },
          })),
        },
      },
    });

    return NextResponse.json({ success: true, project }, { status: 200 });
  } catch (error) {
    console.error("Failed to save project:", error);

    // Handle specific Prisma error
    if (
      error instanceof TypeError &&
      error.message.includes('The "payload" argument must be of type object')
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Unexpected error: payload must be a non-null object",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to save project" },
      { status: 500 }
    );
  }
}
