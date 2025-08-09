"use client";

import { useEffect, useMemo, useState } from "react";
import Modal from "@/components/ui/Modal";
import type { Restaurant, RestaurantUpdate } from "@models/restaurant";

export interface MealFormValues {
  name: string;
  rating: string;
  avatar: string;
  restaurantName: string; // alias to name
  logo: string;
  status: "open" | "close";
}

function toValues(r?: Restaurant): MealFormValues {
  if (!r)
    return {
      name: "",
      rating: "",
      avatar: "",
      restaurantName: "",
      logo: "",
      status: "open",
    };
  return {
    name: r.name ?? "",
    rating: r.rating ?? "",
    avatar: r.avatar ?? "",
    restaurantName: r.name ?? "",
    logo: r.logo ?? "",
    status: r.open ? "open" : "close",
  };
}

function toUpdate(values: MealFormValues): RestaurantUpdate {
  return {
    name: values.restaurantName || values.name,
    rating: values.rating,
    avatar: values.avatar,
    logo: values.logo,
    open: values.status === "open",
  };
}

interface MealFormModalProps {
  open: boolean;
  initial?: Restaurant | null;
  onClose: () => void;
  onSubmit: (payload: RestaurantUpdate) => Promise<void> | void;
}

export default function MealFormModal({ open, initial, onClose, onSubmit }: MealFormModalProps) {
  const [values, setValues] = useState<MealFormValues>(() => toValues(initial ?? undefined));
  const [submitting, setSubmitting] = useState(false);
  const isEdit = useMemo(() => Boolean(initial), [initial]);

  useEffect(() => {
    if (open) setValues(toValues(initial ?? undefined));
  }, [open, initial]);

  const title = isEdit ? "Edit Meal" : "Add a meal";
  const primaryLabel = isEdit ? "Save" : "Add";

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <>
          <button
            type="button"
            disabled={submitting}
            className="inline-flex min-w-28 items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 px-5 py-2.5 font-semibold text-white shadow-sm hover:from-orange-500 hover:to-amber-600 disabled:opacity-60"
            onClick={async () => {
              setSubmitting(true);
              try {
                await onSubmit(toUpdate(values));
                onClose();
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {primaryLabel}
          </button>
          <button
            type="button"
            disabled={submitting}
            className="min-w-28 rounded-lg border border-gray-300 bg-white px-5 py-2.5 font-semibold text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-60"
            onClick={onClose}
          >
            Cancel
          </button>
        </>
      }
    >
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs text-gray-500">Food name</label>
          <input
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            placeholder="Food name"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none ring-orange-500 placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2"
          />
          {!values.name && (
            <p className="mt-1 text-xs text-rose-500">Food name is required</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-xs text-gray-500">Food rating</label>
          <input
            value={values.rating}
            onChange={(e) => setValues((v) => ({ ...v, rating: e.target.value }))}
            placeholder="4.6"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none ring-orange-500 placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs text-gray-500">Food image (link)</label>
          <input
            value={values.avatar}
            onChange={(e) => setValues((v) => ({ ...v, avatar: e.target.value }))}
            placeholder="https://..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none ring-orange-500 placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs text-gray-500">Restaurant name</label>
          <input
            value={values.restaurantName}
            onChange={(e) => setValues((v) => ({ ...v, restaurantName: e.target.value }))}
            placeholder="Subway"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none ring-orange-500 placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs text-gray-500">Restaurant logo (link)</label>
          <input
            value={values.logo}
            onChange={(e) => setValues((v) => ({ ...v, logo: e.target.value }))}
            placeholder="https://..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none ring-orange-500 placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs text-gray-500">Restaurant status (open/close)</label>
          <select
            value={values.status}
            onChange={(e) => setValues((v) => ({ ...v, status: e.target.value as MealFormValues["status"] }))}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none ring-orange-500 focus:border-orange-300 focus:bg-white focus:ring-2"
          >
            <option value="open">open</option>
            <option value="close">close</option>
          </select>
        </div>
      </div>
    </Modal>
  );
}


