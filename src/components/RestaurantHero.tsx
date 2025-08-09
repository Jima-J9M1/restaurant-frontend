"use client";

import Image from "next/image";
import { useRef } from "react";
import { IMAGES } from "@restaurant/lib/constant/variables";

interface RestaurantHeroProps {
  onSearch?: (value: string) => void;
}

export default function RestaurantHero({ onSearch }: RestaurantHeroProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className="relative w-full bg-[#FFB30E]">
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-6 px-4 py-12 md:gap-10 md:px-6 md:py-16 lg:py-20">
        {/* Left: heading + search card */}
        <div className="col-span-12 md:col-span-7 lg:col-span-7">
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Are you starving?
          </h1>
          <p className="mt-3 text-white/90 md:text-lg">
            Within a few clicks, find meals that are accessible near you
          </p>

          {/* Search card */}
          <div className="mt-8 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg">
            {/* Tabs */}
            <div className="flex items-center gap-3 px-4 py-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-[#F17228] px-3 py-1.5 text-sm font-semibold text-white shadow-sm"
              >
                <Image src={IMAGES.motorIcon} alt="Delivery" width={16} height={16} />
                Delivery
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-600"
              >
                <Image src={IMAGES.pickIcon} alt="Pickup" width={16} height={16} />
                Pickup
              </button>
            </div>
            <div className="h-px w-full bg-gray-100" />

            {/* Search row */}
            <div className="flex items-center gap-3 px-4 py-3 md:px-5 md:py-4">
              <div className="relative w-full">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Image src={IMAGES.searchIcon} alt="Search" width={18} height={18} />
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="What do you like to eat today?"
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none ring-orange-500 placeholder:text-gray-400 focus:border-orange-300 focus:ring-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onSearch?.((e.target as HTMLInputElement).value);
                  }}
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F17228] px-7 py-3 text-white shadow-sm hover:brightness-95 w-[200px]"
                onClick={() => {
                  const value = inputRef.current?.value ?? "";
                  onSearch?.(value);
                }}
              >
                <Image src={IMAGES.searchIconWhite} alt="Find" width={18} height={18} />
                <span className="hidden md:inline">Find Meal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: hero bowl image */}
        <div className="relative col-span-12 hidden md:col-span-5 md:block">
          <div className="relative h-[360px] w-full lg:h-[420px] top-30 z-10">
            <Image src={IMAGES.heroImage} alt="Food" fill className="object-contain" priority />
          </div>
        </div>
      </div>
    </section>
  );
}


