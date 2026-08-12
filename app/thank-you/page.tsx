export default function ThankYou() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-6 py-32 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Thanks — you&apos;re all set
        </h1>
        <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          Your checklist is ready to download.
        </p>
        <a
          href="/checklist.pdf"
          download
          className="rounded-md bg-foreground px-5 py-2.5 font-medium text-background transition-opacity hover:opacity-90"
        >
          Download the checklist
        </a>
      </main>
    </div>
  );
}
