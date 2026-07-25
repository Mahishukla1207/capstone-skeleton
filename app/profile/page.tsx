import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FlyRank | Profile",
  description: "Placeholder profile page for the FlyRank app.",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tasks", label: "Tasks" },
  { href: "/settings", label: "Settings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-16 font-sans dark:bg-black">
      <main className="w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-black sm:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          FlyRank placeholder
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-black dark:text-zinc-50">
          Profile
        </h1>
        <p className="mt-3 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This profile placeholder will show account and preferences information.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-zinc-200 px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
