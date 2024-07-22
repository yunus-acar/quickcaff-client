"use client";
import Description from "@/components/description";
import Title from "@/components/title";
import {
  GetFilterableAttributesQueryVariables,
  Temperature,
  useGetFilterableAttributesQuery,
} from "@/generated/graphql";
import { queryKeys } from "@/utils/constant";
import { parseAsString, useQueryStates } from "nuqs";
import { TfiBackLeft, TfiBackRight } from "react-icons/tfi";
import { useToast } from "@/components/ui/use-toast";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import searchParams from "@/utils/searchParams";

const QueryButton = dynamic(() => import("@/components/coffee-query-button"), {
  ssr: false,
});

const FilteredCoffesDrawer = dynamic(
  () => import("@/components/filtered-coffees.drawer"),
  {
    ssr: false,
  }
);

const Coffees = () => {
  const [query, setQuery] = useQueryStates({
    ...searchParams,
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
