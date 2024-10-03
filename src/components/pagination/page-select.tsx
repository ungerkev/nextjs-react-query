"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Label } from "../ui/label";

type Props = {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
  disabled?: boolean;
};

const PageSelect = ({ page, setPage, totalPages, disabled = false }: Props) => {
  return (
    <Select disabled={totalPages <= 1 || disabled} value={`${page}`} onValueChange={(page) => setPage(Number(page))}>
      <div className="relative">
        <Label className="text-xs absolute -bottom-4 left-0 text-muted-foreground">Select Page</Label>
        <SelectTrigger className="w-[65px] flex gap-1 bg-background">{`${page}`}</SelectTrigger>
      </div>
      <SelectContent>
        {Array.from({ length: totalPages }, (_, index) => (
          <SelectItem key={uuidv4()} value={String(index + 1)}>
            <span>{index + 1}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PageSelect;
