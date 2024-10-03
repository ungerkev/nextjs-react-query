"use client";

import React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEFAULT_LIMIT, POSSIBLE_LIMITS } from "@/config/limit";
import { Label } from "../ui/label";

type Props = {
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
};

const LimitSelect = ({ limit, setPage, setLimit }: Props) => {
  const onChangeLimit = (limit: string) => {
    const newLimit = Number(limit);
    setPage(1);
    setLimit(newLimit);
  };

  return (
    <Select value={`${limit}`} onValueChange={(limit) => onChangeLimit(limit)}>
      <div className="relative">
        <Label className="text-xs absolute -bottom-4 left-0 text-muted-foreground">Select Limit</Label>
        <SelectTrigger className="w-[65px]" value={DEFAULT_LIMIT}>
          <SelectValue />
        </SelectTrigger>
      </div>

      <SelectContent>
        <SelectGroup>
          {POSSIBLE_LIMITS.map((possibleLimit) => (
            <SelectItem key={possibleLimit} value={possibleLimit}>
              {possibleLimit}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LimitSelect;
