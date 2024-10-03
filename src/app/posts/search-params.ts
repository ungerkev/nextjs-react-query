import { createSearchParamsCache, parseAsInteger } from "nuqs/server";
import { DEFAULT_LIMIT } from "@/config/limit";

export const searchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(DEFAULT_LIMIT),
});
