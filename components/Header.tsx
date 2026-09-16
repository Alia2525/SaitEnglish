import Link from "next/link";

const nav = [
  { href: "/trainers/vocabulary", label: "Словник" },
  { href: "/trainers/grammar", label: "Граматика" },
  { href: "/trainers/fill-blank", label: "Пропуски" },
];

export function Header() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)] text-sm font-bold text-white">
            EN
          </span>
          SaitEnglish
        </Link>
        <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-[var(--color-muted)] transition hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
