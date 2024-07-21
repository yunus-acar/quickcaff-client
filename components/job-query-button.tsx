"use client";
import React from "react";
import { Button } from "./ui/button";
import { useQueryState } from "nuqs";

interface JobQueryButtonProps {
  label: string;
  queryKey: string;
  value: number | string;
}

const JobQueryButton = ({ label, queryKey, value }: JobQueryButtonProps) => {
  const [query, setQuery] = useQueryState(queryKey);

  const handleClick = () => {
    setQuery(String(value));
  };

  return <Button onClick={handleClick}>{label}</Button>;
};

export default JobQueryButton;
