// actions/message-sender.ts

import { messageSchema } from "@/schema/general-schema";

interface MessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendMessage(
  data: MessageData
): Promise<{ success: boolean; message: string }> {
  try {
    // Validate the data before sending it to the API
    messageSchema.parse(data);

    // Send the message to the API endpoint
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send message");
    }

    return { success: true, message: result.message };
  } catch (error: any) {
    console.error("Error in sendMessage:", error);

    return { success: false, message: error.message || "An error occurred" };
  }
}
