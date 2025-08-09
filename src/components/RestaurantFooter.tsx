import Image from "next/image";
import { IMAGES } from "@restaurant/lib/constant/variables";

interface RestaurantFooterProps {
  className?: string;
  brand?: string;
}

export default function RestaurantFooter({
  className,
  brand = "FoodWagen",
}: RestaurantFooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className={className}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-600 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Image src={IMAGES.logo} alt="Logo" width={24} height={24} />
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text font-semibold text-transparent">
            {brand}
          </span>
        </div>

        <p className="text-center md:text-right">© {year} {brand}. All rights reserved.</p>
      </div>
    </footer>
  );
}