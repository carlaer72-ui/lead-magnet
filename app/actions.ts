"use server";

import { redirect } from "next/navigation";
import { createServiceClient } from "@/lib/supabase";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubmitLeadState = {
  error?: string;
};

export async function submitLead(
  _prevState: SubmitLeadState,
  formData: FormData
): Promise<SubmitLeadState> {
  // Honeypot: bots tend to fill every field, humans never see or fill this one.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { error: "Something went wrong. Please try again." };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!EMAIL_PATTERN.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    const supabase = createServiceClient();
    const { error } = await supabase.from("leads").upsert(
      { email },
      { onConflict: "email", ignoreDuplicates: true }
    );

    if (error) {
      return { error: "We couldn't save your email. Please try again." };
    }
  } catch {
    return { error: "We couldn't save your email. Please try again." };
  }

  redirect("/thank-you");
}
