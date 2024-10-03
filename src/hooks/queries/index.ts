import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { postsKeys } from "./posts";

export const queries = mergeQueryKeys(postsKeys);
