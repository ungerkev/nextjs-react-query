"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Button } from "../ui/button";
import LimitSelect from "./limit-select";
import PageSelect from "./page-select";

type Props = {
  totalPages: number;
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  disabled?: boolean;
};

const PaginationComponent = ({ page, limit, setPage, setLimit, totalPages, disabled = false }: Props) => {
  return (
    <Pagination className="pb-1">
      <PaginationContent className="space-x-2">
        <PaginationItem className={cn({ ["hover:cursor-not-allowed"]: page === 1 || disabled })}>
          <Button onClick={() => setPage(page - 1)} disabled={page <= 1 || page > totalPages || disabled}>
            Previous
          </Button>
        </PaginationItem>

        <PaginationItem className={cn({ ["hover:cursor-not-allowed"]: page === totalPages || disabled })}>
          <Button onClick={() => setPage(page + 1)} disabled={page >= totalPages || disabled}>
            Next
          </Button>
        </PaginationItem>

        <PageSelect page={page} setPage={setPage} disabled={disabled} totalPages={totalPages} />

        <LimitSelect limit={limit} setLimit={setLimit} setPage={setPage} disabled={disabled} />
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationComponent;
