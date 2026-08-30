import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-sageDeep">
          cleanse · treat · moisturize · repeat
        </p>
        <h1 className="font-display text-4xl italic leading-tight text-ink sm:text-5xl">
          Most skincare routines fail before the first bottle is empty.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink/80">
          Glowmatch matches you to products that actually fit your skin —
          then tracks what&apos;s working, so you stop guessing and start
          seeing results.
        </p>

        <div className="mx-auto mt-10 max-w-sm">
          <div className="layer-track">
            <div className="layer-step bg-sage" style={{ flexBasis: '33.33%' }} />
            <div className="layer-step bg-coral" style={{ flexBasis: '33.33%' }} />
            <div className="layer-step bg-gold" style={{ flexBasis: '33.34%' }} />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/quiz/free"
            className="rounded-full bg-coral px-8 py-3 font-medium text-paper transition hover:opacity-90"
          >
            Take the free quiz — 2 min
          </Link>
          <Link
            href="/quiz/premium"
            className="rounded-full border border-ink/15 px-8 py-3 font-medium text-ink transition hover:border-ink/40"
          >
            See the full skin profile
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <span className="inline-block h-2 w-2 rounded-full bg-sage" />
            <h3 className="mt-3 font-display text-lg text-ink">
              Cleanse the guesswork
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Answer a few quick questions about your skin. No account
              needed.
            </p>
          </div>
          <div>
            <span className="inline-block h-2 w-2 rounded-full bg-coral" />
            <h3 className="mt-3 font-display text-lg text-ink">
              Treat with a real match
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Get product picks based on your skin type and concerns, not
              what&apos;s trending.
            </p>
          </div>
          <div>
            <span className="inline-block h-2 w-2 rounded-full bg-gold" />
            <h3 className="mt-3 font-display text-lg text-ink">
              Moisturize your routine
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Go deeper with the full profile: environment, goals, and a
              plan that adjusts as your skin changes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-lg border border-mist bg-white/60 p-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            Glowmatch Plus
          </p>
          <h2 className="mt-3 font-display text-2xl italic text-ink">
            The in-depth profile, plus a routine that keeps up with you
          </h2>
          <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-ink/80">
            <li>— A full skin profile: type, environment, and every concern</li>
            <li>— Alerts when new products match your profile</li>
            <li>— Reminders before you run out, timed to each product</li>
            <li>— Progress tracking so you can see what&apos;s actually working</li>
          </ul>
          <Link
            href="/quiz/premium"
            className="mt-8 inline-block rounded-full bg-ink px-8 py-3 font-medium text-paper transition hover:opacity-90"
          >
            Start the full profile
          </Link>
        </div>
      </section>
    </main>
  );
}
