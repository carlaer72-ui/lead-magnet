"use client";

import { useActionState } from "react";
import { submitLead, type SubmitLeadState } from "./actions";

const initialState: SubmitLeadState = {};

export function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-3">
      {/* Honeypot field: hidden from real visitors, bots tend to fill it in. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="rounded-md border border-black/10 bg-white px-4 py-2 text-black outline-none focus:border-black/30 dark:border-white/20 dark:bg-black dark:text-white dark:focus:border-white/40"
      />

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-foreground px-4 py-2 font-medium text-background transition-opacity disabled:opacity-60"
      >
        {pending ? "Sending…" : "Get the checklist"}
      </button>

      {state.error && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {state.error}
        </p>
      )}
    </form>
  );
}
