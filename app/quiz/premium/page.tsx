import Link from 'next/link';

export default function PremiumQuiz() {
  return (
    <main className="mx-auto min-h-screen max-w-xl px-6 py-16 text-center">
      <Link href="/" className="text-sm text-sageDeep">
        ← Glowmatch
      </Link>

      <p className="mt-10 text-xs uppercase tracking-[0.2em] text-gold">
        Glowmatch Plus
      </p>
      <h1 className="mt-3 font-display text-3xl italic text-ink">
        Your full skin profile is almost here
      </h1>
      <p className="mx-auto mt-4 max-w-md text-ink/70">
        Skin type, environment, sensitivity, every concern you're working
        on — matched to real products, with reminders and progress
        tracking built in.
      </p>

      <div className="mt-10 rounded-lg border border-mist bg-white/60 p-8">
        <p className="text-ink">
          Glowmatch Plus is almost ready. Take the free quiz now, and
          we'll let you know the moment the full profile opens up.
        </p>
      </div>

      <Link
        href="/quiz/free"
        className="mt-8 inline-block rounded-full bg-coral px-8 py-3 font-medium text-paper transition hover:opacity-90"
      >
        Take the free quiz — 2 min
      </Link>
    </main>
  );
}
