"use client";

import { useEffect, useRef, useState } from "react";
import type { Restaurant } from "@models/restaurant";
import Image from "next/image";

export interface RestuarantCardProps {
  restaurant: Restaurant;
  className?: string;
  onEdit?: (restaurant: Restaurant) => void;
  onDelete?: (restaurant: Restaurant) => void;
}

function formatPrice(priceRaw?: string): string | null {
  if (!priceRaw) return null;
  const numeric = Number.parseFloat(priceRaw);
  if (Number.isFinite(numeric)) {
    return `$${numeric.toFixed(2)}`;
  }
  return `$${priceRaw}`;
}

export default function RestuarantCard({
  restaurant,
  className,
  onEdit,
  onDelete,
}: RestuarantCardProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const price = formatPrice(restaurant.price ?? restaurant.Price);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={[
        "relative rounded-2xl bg-white shadow-sm overflow-hidden",
        "transition hover:shadow-md",
        className ?? "",
      ].join(" ")}
    >
      <div className="relative h-56 w-full overflow-hidden">
        {/* Image */}
        <Image
          src={restaurant.avatar ?? "/images/default-image.png"}
          alt={restaurant.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        {/* Price tag */}
        {price && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-lg bg-orange-500 px-3 py-1 text-white text-sm font-semibold shadow-md">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.59 13.41L11 3.83C10.63 3.46 10.11 3.25 9.58 3.25H4.75C3.37 3.25 2.25 4.37 2.25 5.75V10.58C2.25 11.11 2.46 11.63 2.83 12L12.41 21.59C13.19 22.37 14.46 22.37 15.24 21.59L20.59 16.24C21.37 15.46 21.37 14.19 20.59 13.41ZM6.5 8.25C5.81 8.25 5.25 7.69 5.25 7C5.25 6.31 5.81 5.75 6.5 5.75C7.19 5.75 7.75 6.31 7.75 7C7.75 7.69 7.19 8.25 6.5 8.25Z" fill="currentColor"/>
            </svg>
            <span>{price}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Logo */}
          <Image
            src={restaurant.logo}
            alt={`${restaurant.name} logo`}
            className="h-10 w-10 flex-none rounded-md object-cover border"
            loading="lazy"
            width={1000}
            height={1000}
          />

          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-2">
              <h3 className="flex-1 truncate text-base font-semibold text-gray-900" title={restaurant.name}>
                {restaurant.name}
              </h3>

              {/* Menu */}
              <div className="relative" ref={menuRef}>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>

                {menuOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 z-50 mt-2 w-32 overflow-hidden rounded-md bg-white py-1 text-sm shadow-lg"
                  >
                    <button
                      role="menuitem"
                      className="block w-full px-3 py-2 text-left hover:bg-gray-50"
                      onClick={() => {
                        setMenuOpen(false);
                        onEdit?.(restaurant);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      role="menuitem"
                      className="block w-full px-3 py-2 text-left text-red-600 hover:bg-red-50"
                      onClick={() => {
                        setMenuOpen(false);
                        onDelete?.(restaurant);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.868 1.401-8.168L.132 9.21l8.2-1.192z" />
              </svg>
              <span className="text-sm font-semibold text-amber-500">
                {(() => {
                  const r = Number.parseFloat(restaurant.rating);
                  return Number.isFinite(r) ? r.toFixed(1) : restaurant.rating;
                })()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Open/Closed badge */}
      {!restaurant.open && (
        <div className="absolute bottom-3 left-3 rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-600">
          Closed
        </div>
      )}
    </div>
  );
}


