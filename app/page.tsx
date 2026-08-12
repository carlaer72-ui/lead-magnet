import { LeadForm } from "./lead-form";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-8 py-32 text-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Get the free checklist
          </h1>
          <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Enter your email and we&apos;ll send you the checklist right away.
          </p>
        </div>

        <LeadForm />
      </main>
    </div>
  );
}
