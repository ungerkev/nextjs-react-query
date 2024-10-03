"use client";
import { useEffect, useTransition, useState } from "react";
import { useQueryState, parseAsInteger } from "nuqs";
import { DEFAULT_LIMIT } from "@/config/limit";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  shallow: boolean;
};

export const usePagination = ({ shallow = true }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const [pageChanged, startPageTransition] = useTransition();
  const [limitChanged, startLimitTransition] = useTransition();

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1).withOptions({ shallow, startTransition: startPageTransition }));
  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsInteger.withDefault(DEFAULT_LIMIT).withOptions({ shallow, startTransition: startLimitTransition })
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    router.prefetch(`${pathname}?page=${page + 1}&limit=${limit}`);
  }, [page, limit, router, pathname]);

  return {
    page,
    isLoading: isMounted && (pageChanged || limitChanged),
    limit,
    setPage,
    setLimit,
  };
};
