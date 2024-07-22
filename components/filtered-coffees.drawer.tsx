"use client";

import React, { useEffect, useState } from "react";
import CoffeeDrawer from "./coffee-drawer";
import { useQueryStates } from "nuqs";
import { Temperature, useGetFilteredCoffeesQuery } from "@/generated/graphql";
import searchParams from "@/utils/searchParams";

const FilteredCoffesDrawer = () => {
  const [query] = useQueryStates(searchParams);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetFilteredCoffeesQuery({
    variables: {
      density: query.density as string,
      flavors: query.flavors as string[],
      pairingSuggestions: query.pairing_suggestions as string[],
      temperature: query.temperature
        ? (query.temperature.toUpperCase() as Temperature)
        : Temperature.Hot,
      others: query.others,
    },
  });

  useEffect(() => {
    setIsOpen(!!query);
  }, [query]);

  return (
    <CoffeeDrawer
      isOpen={isOpen}
      title={"İşte size uygun kahveler"}
      description="Aşağıda sizin için uygun kahveler listelenmiştir. İyi kahve keyfi!"
      coffees={data?.getFilteredCoffees || []}
      onChanges={(isOpen) => {
        setIsOpen(isOpen);
      }}
    />
  );
};

export default FilteredCoffesDrawer;
