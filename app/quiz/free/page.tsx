'use client';

import { useState } from 'react';
import Link from 'next/link';

type Question = {
  id: string;
  prompt: string;
  options: { label: string; value: string }[];
};

const QUESTIONS: Question[] = [
  {
    id: 'skinType',
    prompt: "How does your skin feel by mid-afternoon?",
    options: [
      { label: 'Shiny, especially T-zone', value: 'oily' },
      { label: 'Tight or flaky', value: 'dry' },
      { label: 'Oily in some spots, dry in others', value: 'combination' },
      { label: 'Comfortable, no real change', value: 'normal' }
    ]
  },
  {
    id: 'sensitivity',
    prompt: 'How does your skin usually react to new products?',
    options: [
      { label: 'Redness or stinging fairly often', value: 'sensitive' },
      { label: 'Rarely reacts', value: 'resilient' }
    ]
  },
  {
    id: 'concern',
    prompt: "What's the one thing you'd fix first?",
    options: [
      { label: 'Breakouts', value: 'acne' },
      { label: 'Fine lines', value: 'aging' },
      { label: 'Dullness or uneven tone', value: 'tone' },
      { label: 'Redness or irritation', value: 'redness' }
    ]
  }
];

function getRecommendation(answers: Record<string, string>) {
  const { skinType, concern } = answers;
  const base =
    skinType === 'oily'
      ? 'a lightweight, gel-based cleanser'
      : skinType === 'dry'
      ? 'a cream cleanser that won\u2019t strip your skin'
      : 'a gentle, pH-balanced cleanser';
  const focus =
    concern === 'acne'
      ? 'a salicylic acid treatment 2–3x a week'
      : concern === 'aging'
      ? 'a retinol at night, started slowly'
      : concern === 'tone'
      ? 'a vitamin C serum in the morning'
      : 'a fragrance-free, barrier-repair moisturizer';
  return { base, focus };
}

export default function FreeQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = step >= QUESTIONS.length;

  function answer(value: string) {
    setAnswers((prev) => ({ ...prev, [QUESTIONS[step].id]: value }));
    setStep((s) => s + 1);
  }

  return (
    <main className="mx-auto min-h-screen max-w-xl px-6 py-16">
      <Link href="/" className="text-sm text-sageDeep">
        ← Glowmatch
      </Link>

      <div className="layer-track mt-6">
        <div
          className="layer-step bg-sage"
          style={{
            flexBasis: `${(Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100}%`
          }}
        />
      </div>

      {!done ? (
        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-sageDeep">
            Question {step + 1} of {QUESTIONS.length}
          </p>
          <h1 className="mt-3 font-display text-2xl text-ink">
            {QUESTIONS[step].prompt}
          </h1>
          <div className="mt-8 space-y-3">
            {QUESTIONS[step].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => answer(opt.value)}
                className="block w-full rounded-lg border border-mist px-5 py-4 text-left text-ink transition hover:border-coral hover:bg-coral/5"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <Result answers={answers} />
      )}
    </main>
  );
}

function Result({ answers }: { answers: Record<string, string> }) {
  const { base, focus } = getRecommendation(answers);
  return (
    <div className="mt-10">
      <p className="text-xs uppercase tracking-[0.2em] text-coral">
        Your starting point
      </p>
      <h1 className="mt-3 font-display text-2xl italic text-ink">
        Two moves worth making
      </h1>
      <div className="mt-6 space-y-4">
        <div className="rounded-lg border border-mist p-5">
          <p className="text-sm text-sageDeep">Step 1 — Cleanse</p>
          <p className="mt-1 text-ink">Look for {base}.</p>
        </div>
        <div className="rounded-lg border border-mist p-5">
          <p className="text-sm text-sageDeep">Step 2 — Treat</p>
          <p className="mt-1 text-ink">Add {focus}.</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-ink/70">
        This is the generic version. The full profile accounts for your
        environment, sensitivity, and goals — and tracks whether it's
        actually working.
      </p>
      <Link
        href="/quiz/premium"
        className="mt-6 inline-block rounded-full bg-ink px-8 py-3 font-medium text-paper transition hover:opacity-90"
      >
        Get the full profile
      </Link>
    </div>
  );
}
