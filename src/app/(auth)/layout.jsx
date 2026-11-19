import Image from "next/image";
import { redirect } from "next/navigation";
import { Logo } from "@/components/layout/logo";
import { Ribbon } from "@/components/layout/ribbon";
import { getCurrentUser } from "@/lib/auth/session";
import { getDashboardPath } from "@/lib/auth/roles";

// User yang sudah login tidak perlu melihat halaman login/register lagi.
export default async function AuthLayout({ children }) {
  const user = await getCurrentUser();
  if (user) redirect(getDashboardPath(user.role));

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-ink text-white lg:flex lg:flex-col lg:justify-between lg:p-12">
        <Image src="/images/hero-model.jpg" alt="" fill priority sizes="50vw" className="object-cover object-[center_65%] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
        <Ribbon flip className="right-0 bottom-24 w-[420px] opacity-60" />
        <Logo className="relative" />
        <blockquote className="relative max-w-md space-y-4">
          <p className="font-display text-4xl leading-tight italic">&ldquo;Confidence is the first thing you wear on the runway.&rdquo;</p>
          <footer className="eyebrow text-white/70">KARÉLLE Modeling Course</footer>
        </blockquote>
      </aside>
      <main id="main-content" className="flex flex-col items-center justify-center px-5 py-12 sm:px-10">
        <div className="mb-10 lg:hidden">
          <div className="rounded-xl bg-ink px-6 py-4"><Logo /></div>
        </div>
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
