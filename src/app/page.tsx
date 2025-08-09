"use client";

import { useEffect, useMemo, useState } from "react";
import RestaurantHeader from "@/components/RestaurantHeader";
import RestaurantHero from "@/components/RestaurantHero";
import RestuarantCard from "@/components/RestuarantCard";
import RestaurantFooter from "@/components/RestaurantFooter";
import MealFormModal from "@/components/modals/MealForm";
import DeleteConfirm from "@/components/modals/DeleteConfirm";
import type { Restaurant } from "@models/restaurant";
import { getAllRestuarant, updateRestuarant, deleteRestuarant } from "@repository/restaurantRepository";

export default function Home() {
  const [items, setItems] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Restaurant | null>(null);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState<Restaurant | null>(null);

  async function loadMeals(term?: string) {
    setLoading(true);
    try {
      const data = await getAllRestuarant(term ? { search: term } : {});
      console.log(">>>>>>>>>>>>>>>>> Data", data);
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMeals();
  }, []);

  const title = useMemo(() => (search ? `Featured Meals for "${search}"` : "Featured Meals"), [search]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <RestaurantHeader onAddMeal={() => setAdding(true)} />

      <main className="">
        <div className="z-10 overflow-hidden ">
        <RestaurantHero
          onSearch={(term) => {
            setSearch(term);
            loadMeals(term);
          }}
        />
        </div>
        <div className="px-48 z-20   ">
        <h2 className="mt-10 text-center text-xl font-bold md:text-2xl">{title}</h2>

        {loading ? (
          <div className="py-12 text-center text-gray-500">Loading...</div>
        ) : (
          <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <RestuarantCard
                key={item.id}
                restaurant={item}
                onEdit={(r) => setEditing(r)}
                onDelete={(r) => setDeleting(r)}
              />
            ))}
            </section>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
            className="inline-flex items-center rounded-[14px] bg-gradient-to-r from-orange-400 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:from-orange-500 hover:to-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              onClick={() => loadMeals(search)}
            >
              Load more
            </button>
          </div>
        )}
      </main>

      <RestaurantFooter />

      {/* Modals */}
      <MealFormModal
        open={Boolean(adding || editing)}
        initial={editing}
        onClose={() => {
          setAdding(false);
          setEditing(null);
        }}
        onSubmit={async (payload) => {
          // Only update is implemented in repository; integrate create here when available
          if (editing) {
            await updateRestuarant(editing.id, payload);
            await loadMeals(search);
          } else {
            console.info("Create endpoint not implemented in repository. Payload:", payload);
          }
        }}
      />

      <DeleteConfirm
        open={Boolean(deleting)}
        onClose={() => setDeleting(null)}
        onConfirm={async () => {
          if (!deleting) return;
          await deleteRestuarant(deleting.id);
          setDeleting(null);
          await loadMeals(search);
        }}
      />
    </div>
  );
}