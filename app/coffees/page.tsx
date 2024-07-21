"use client";
import Description from "@/components/description";
import Title from "@/components/title";
import {
  GetFilterableAttributesQueryVariables,
  Temperature,
  useGetFilterableAttributesQuery,
} from "@/generated/graphql";
import { queryKeys } from "@/utils/constant";
import React, { Suspense } from "react";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";
import QueryButton from "../../components/coffee-query-button";
import { useSearchParams } from "next/navigation";
import CoffeeDrawer from "@/components/coffee-drawer";
import { Filter } from "lucide-react";
import FilteredCoffesDrawer from "@/components/filtered-coffees.drawer";
import { Button } from "@/components/ui/button";
import { TfiBackLeft, TfiBackRight } from "react-icons/tfi";
import { useToast } from "@/components/ui/use-toast";

export const searchParamsCache = {
  density: parseAsString,
  flavors: parseAsArrayOf(parseAsString),
  others: parseAsArrayOf(parseAsString),
  pairing_suggestions: parseAsArrayOf(parseAsString),
  temperature: parseAsString,
};

const Coffees = () => {
  const [query, setQuery] = useQueryStates({
    ...searchParamsCache,
    key: parseAsString,
  });
  const { toast } = useToast();

  const queryKey = queryKeys.find((q) => q.key === query.key);
  const currentKeyIndex = queryKeys.findIndex((q) => q.key === query.key);

  const { data, loading } = useGetFilterableAttributesQuery({
    variables: {
      ...(query as GetFilterableAttributesQueryVariables),
      ...{
        temperature: query.temperature
          ? (query.temperature.toUpperCase() as Temperature)
          : undefined,
      },
    },
    fetchPolicy: "cache-first",
  });

  if (!queryKey || loading) {
    return;
  }

  return (
    <main className="w-full">
      <div className="container p-padding mx-auto text-center">
        <div className="">
          <Title title={queryKey.title || ""} />
          <Description description={queryKey.description || ""} />
          <div className="flex items-center max-w-xl mx-auto justify-center flex-wrap gap-4 mt-8">
            {data?.getFilterableAttributes.map((key) => (
              <QueryButton
                count={data.getFilterableAttributes.length || 0}
                key={key}
                value={key}
              />
            ))}
          </div>
          {(currentKeyIndex === queryKeys.length - 1 ||
            data?.getFilterableAttributes.length === 0) && (
            <FilteredCoffesDrawer />
          )}
        </div>

        <div className="grid max-w-2xl mx-auto my-10 w-full grid-cols-2 items-center">
          {currentKeyIndex > 0 ? (
            <Button
              size={"icon"}
              className="justify-self-start rounded-full"
              onClick={() => {
                setQuery({
                  ...query,
                  key: queryKeys[currentKeyIndex - 1].key,
                  [queryKey.key]: null,
                  [queryKeys[currentKeyIndex - 1].key]: null,
                });
              }}
            >
              <TfiBackLeft />
            </Button>
          ) : (
            <div className="justify-self-start" />
          )}

          {currentKeyIndex < queryKeys.length - 1 && (
            <Button
              size={"icon"}
              className="justify-self-end rounded-full "
              onClick={() => {
                const currentQuery = (query as any)[query.key as any];
                if (
                  currentQuery !== null &&
                  currentQuery !== undefined &&
                  currentQuery.length > 0
                ) {
                  return setQuery({
                    ...query,
                    key: queryKeys[currentKeyIndex + 1].key,
                  });
                }

                toast({
                  title: "Hata",
                  description: "Lütfen bir seçim yapınız.",
                });
              }}
            >
              <TfiBackRight size={20} />
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Coffees;

/*

 <Button
            onClick={() => {
              setQuery({ key: "temperature" });
            }}
          >
            <Filter size={24} />
            <span>Filtreleri Temizle</span>
          </Button>*/
