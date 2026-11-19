import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({ className, tone = "light" }) {
  const color = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" aria-label="KARÉLLE — beranda" className={cn("flex items-center gap-3", color, className)}>
      <span aria-hidden className="font-display text-[2.6rem] leading-none italic">K</span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-[0.28em]">KARÉLLE</span>
        <span className="mt-1 text-[0.55rem] tracking-[0.42em] opacity-80">MODELING COURSE</span>
      </span>
    </Link>
  );
}
