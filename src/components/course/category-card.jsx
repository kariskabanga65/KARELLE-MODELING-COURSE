import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Images, Triangle, UsersRound } from "lucide-react";
import { getCategoryImage } from "@/lib/utils/format";

const ICONS = {
  "runway-catwalk": Triangle,
  "photoshoot-posing": Camera,
  "model-portfolio": Images,
  "casting-preparation": UsersRound,
};

export function CategoryCard({ category }) {
  const Icon = ICONS[category.slug] ?? Triangle;
  return (
    <Link
      href={`/courses?category=${category.slug}`}
      className="group relative flex aspect-[11/16] flex-col justify-end overflow-hidden rounded-xl bg-ink p-5 text-white"
    >
      <Image
        src={getCategoryImage(category.slug)}
        alt=""
        fill
        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 90vw"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 via-45% to-transparent" />
      <div className="relative space-y-4">
        <Icon className="size-8 stroke-[1.2]" aria-hidden />
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="text-lg leading-snug">{category.name}</h3>
            <p className="mt-1 text-xs text-white/60">{category.course_count} course</p>
          </div>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/70 transition-colors group-hover:bg-white group-hover:text-ink">
            <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
