export default function PainPoints() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* BOX - only the label has black bg */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center sm:p-12">
          <p className="mx-auto inline-block rounded-full bg-black px-5 py-2 text-lg font-semibold text-green-400">
            Does this sound familiar?
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-green-700 sm:text-4xl">
            You&apos;re Leaving Money on{" "}
            <span className="text-blue-600">the Table Every Single Day.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            You bought GoDigiStartup. You have leads. You have a vision. But
            somewhere between &quot;setting it up&quot; and &quot;scaling it
            up&quot; — everything stalled.
          </p>
        </div>

        {/* GROWTH BLOCKERS */}
        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              Growth Blockers
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              If even 2 of these are true, your growth is leaking daily.
              You&apos;re not behind because you&apos;re lazy — you&apos;re
              buried in broken systems, disconnected tools, and unreliable
              fulfilment.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:justify-between">
            <div className="flex flex-col items-start">
              <span className="text-6xl font-bold text-green-500">8</span>
              <span className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-700">
                Critical Pain Points
              </span>
            </div>
            <div className="flex flex-col items-start sm:items-end">
              <span className="text-3xl font-bold text-blue-500">24/7</span>
              <span className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-700">
                Pressure On You
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
