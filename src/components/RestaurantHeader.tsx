"use client";

import Image from "next/image";
import { IMAGES } from "@restaurant/lib/constant/variables";

interface RestaurantHeaderProps {
  title?: string;
  onAddMeal?: () => void;
}

export default function RestaurantHeader({
  title = "FoodWagen",
  onAddMeal,
}: RestaurantHeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className=" flex items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Image src={IMAGES.logo} alt="Logo" width={197} height={48} priority />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onAddMeal}
            className="inline-flex items-center rounded-[14px] bg-gradient-to-r from-orange-400 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:from-orange-500 hover:to-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Add Meal
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
    </header>
  );
}
