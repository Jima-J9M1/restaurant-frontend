"use client";

import Image from "next/image";
import { IMAGES } from "@restaurant/lib/constant/variables";

interface RestaurantHeroProps {
  title?: string;
  subtitle?: string;
  onSearch?: (value: string) => void;
}

export default function RestaurantHero({
  title = "Discover Delicious Food",
  subtitle = "Order your favorite meals from nearby restaurants",
  onSearch,
}: RestaurantHeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-orange-50 to-amber-50 p-6 md:p-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:gap-10">
        {/* Left: copy + search */}
        <div className="w-full md:w-1/2">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm shadow-sm ring-1 ring-gray-200">
            <Image src={IMAGES.motorIcon} alt="Delivery" width={18} height={18} />
            <span className="text-gray-600">Fast delivery to your doorstep</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-3 max-w-prose text-gray-600 md:text-lg">{subtitle}</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="relative w-full max-w-xl">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Image src={IMAGES.searchIcon} alt="Search" width={18} height={18} />
              </span>
              <input
                type="text"
                placeholder="Search for dishes or restaurants"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none ring-orange-500 placeholder:text-gray-400 focus:border-orange-300 focus:ring-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") onSearch?.((e.target as HTMLInputElement).value);
                }}
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-white shadow-sm hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              onClick={() => {
                const input = (document.activeElement as HTMLInputElement) ?? undefined;
                if (input?.tagName === 'INPUT') onSearch?.(input.value);
              }}
            >
              <Image src={IMAGES.pickIcon} alt="Pick" width={18} height={18} />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative w-full md:w-1/2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
            <Image src={IMAGES.heroImage} alt="Food" fill className="object-cover" priority />
          </div>
        </div>
      </div>

      {/* Decorative logo badge */}
      <div className="pointer-events-none absolute -right-10 -top-10 hidden rotate-12 md:block">
        <Image src={IMAGES.logo} alt="Logo" width={120} height={120} className="opacity-20" />
      </div>
    </section>
  );
}


