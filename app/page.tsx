import Link from "next/link";
import { TrainerCard } from "@/components/TrainerCard";
import { grammarExercises, vocabularySets } from "@/lib/content";

export default function HomePage() {
  const featured = [
    ...grammarExercises.slice(0, 2).map((e) => ({
      href: `/trainers/grammar/${e.id}`,
      title: e.title,
      description: e.description,
      level: e.level,
      meta: `${e.questions.length} питань`,
    })),
    ...vocabularySets.slice(0, 1).map((s) => ({
      href: `/trainers/vocabulary/${s.id}`,
      title: s.title,
      description: s.description,
      level: s.level,
      meta: `${s.cards.length} слів`,
    })),
  ];

  return (
    <div>
      <section className="mb-16 text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Англійська{" "}
          <span className="text-[var(--color-accent)]">на практиці</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          Інтерактивні тренажери: граматика, картки слів, вправи з пропусками.
          Прогрес зберігається у браузері — починай одразу, без акаунта.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center sm:justify-start">
          <Link
            href="/trainers/grammar"
            className="rounded-xl bg-[var(--color-accent)] px-6 py-3 font-medium text-white hover:bg-[var(--color-accent-hover)]"
          >
            Почати з граматики
          </Link>
          <Link
            href="/trainers/vocabulary"
            className="rounded-xl border border-[var(--color-border)] px-6 py-3 font-medium hover:bg-[var(--color-surface-hover)]"
          >
            Картки слів
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-semibold">Популярні тренажери</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <TrainerCard key={item.href} {...item} />
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "Граматика",
            text: "Present Simple, Past Simple та інші теми з поясненнями.",
            href: "/trainers/grammar",
          },
          {
            title: "Словник",
            text: "Картки EN ↔ UA з прикладами речень.",
            href: "/trainers/vocabulary",
          },
          {
            title: "Пропуски",
            text: "Артиклі та інші вправи на вибір правильної форми.",
            href: "/trainers/fill-blank",
          },
        ].map((block) => (
          <Link
            key={block.href}
            href={block.href}
            className="rounded-2xl border border-dashed border-[var(--color-border)] p-6 transition hover:border-[var(--color-accent)]/50"
          >
            <h3 className="font-semibold">{block.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{block.text}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
