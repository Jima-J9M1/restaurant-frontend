import { apiFetch } from "../configs/api-config";
import type { Restaurant, RestaurantUpdate } from "@models/restaurant";

const RESTAURANTS_ENDPOINT = "/Food";

export interface GetAllRestaurantsOptions {
  search?: string;
  filters?: Record<string, unknown>;
  page?: number;
  pageSize?: number;
}

export async function getAllRestaurants(options: GetAllRestaurantsOptions = {}): Promise<Restaurant[]> {
  const { search, filters, page, pageSize } = options;
  const params = {
    ...(search ? { name: search } : {}),
    ...(page !== undefined ? { page } : {}),
    ...(pageSize !== undefined ? { pageSize } : {}),
    ...(filters ?? {}),
  } as Record<string, unknown>;

  return apiFetch<Restaurant[]>(
    `${RESTAURANTS_ENDPOINT}`,
    { method: 'GET', params }
  );
}

export async function getRestaurantById(id: string): Promise<Restaurant> {
  if (!id) throw new Error("Restaurant id is required");
  return apiFetch<Restaurant>(
    `${RESTAURANTS_ENDPOINT}/${encodeURIComponent(id)}`,
    { method: 'GET' }
  );
}

export async function updateRestaurant(id: string, data: RestaurantUpdate): Promise<Restaurant> {
  if (!id) throw new Error("Restaurant id is required");
  return apiFetch<Restaurant>(
    `${RESTAURANTS_ENDPOINT}/${encodeURIComponent(id)}`,
    { method: 'PUT', body: data }
  );
}

export async function deleteRestaurant(id: string): Promise<void> {
  if (!id) throw new Error("Restaurant id is required");
  await apiFetch<void>(
    `${RESTAURANTS_ENDPOINT}/${encodeURIComponent(id)}`,
    { method: 'DELETE' }
  );
}

// Aliases using the requested names (including original spelling)
export const getAllRestuarant = getAllRestaurants;
export const getRestuarantById = getRestaurantById;
export const updateRestuarant = updateRestaurant;
export const deleteRestuarant = deleteRestaurant;


