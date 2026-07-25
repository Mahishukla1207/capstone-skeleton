import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FlyRank | Dashboard",
  description: "Placeholder dashboard page for the FlyRank app.",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/tasks", label: "Tasks" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 px-4 py-10 font-sans sm:px-6 lg:px-8 dark:bg-black">
      <main className="w-full max-w-5xl rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] backdrop-blur-sm sm:p-8 lg:p-10 dark:border-zinc-800 dark:bg-black/90">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          FlyRank placeholder
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
          Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-400">
          This dashboard placeholder will hold analytics and summary content soon.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-center text-sm font-medium text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
