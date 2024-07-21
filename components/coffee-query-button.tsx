"use client";
import React from "react";
import { Button } from "./ui/button";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { queryKeys } from "@/utils/constant";
import { cn } from "@/lib/utils";

interface CoffeeQueryButtonProps {
  value: string;
  count: number;
}

const CoffeeQueryButton = ({ value, count }: CoffeeQueryButtonProps) => {
  const [key, setKey] = useQueryState("key");
  const currentKey = queryKeys.find((query) => query.key === String(key));
  const currentKeyIndex = queryKeys.findIndex(
    (query) => query.key === String(key)
  );
  const nextKey = queryKeys[currentKeyIndex + 1];

  const parser = currentKey?.isMultiple
    ? parseAsArrayOf(parseAsString).withDefault([])
    : parseAsString;

  const [query, setQuery] = useQueryState(key as string, parser);

  if (!currentKey) {
    return null;
  }

  const handleClick = () => {
    if (Array.isArray(query) && query.includes(value)) {
      return (setQuery as any)(query.filter((item) => item !== value));
    }

    if (Array.isArray(query) && query.length <= 3) {
      (setQuery as any)([...query, value]);

      if (query.length === count - 1) {
        handleSetNextKey();
      }
      return;
    } else {
      setQuery(value);
    }

    handleSetNextKey();
  };

  const handleSetNextKey = () => {
    if (currentKeyIndex === queryKeys.length - 1) {
      return;
    }

    setKey(nextKey?.key || "");
  };

  return (
    <Button
      className={cn({
        "bg-gray-400": Array.isArray(query)
          ? query.includes(value)
          : query === value,
      })}
      onClick={handleClick}
    >
      {currentKey.key === "temperature"
        ? currentKey.translations[
            value as keyof typeof currentKey.translations
          ]!
        : value}
    </Button>
  );
};

export default CoffeeQueryButton;
