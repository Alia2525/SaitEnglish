import Link from "next/link";
import { LevelBadge } from "./LevelBadge";
import type { Level } from "@/lib/types";

type Props = {
  href: string;
  title: string;
  description: string;
  level: Level;
  meta?: string;
};

export function TrainerCard({ href, title, description, level, meta }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)]"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-lg group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <LevelBadge level={level} />
      </div>
      <p className="text-sm text-[var(--color-muted)] flex-1">{description}</p>
      {meta && (
        <p className="mt-4 text-xs text-[var(--color-muted)]">{meta}</p>
      )}
    </Link>
  );
}
