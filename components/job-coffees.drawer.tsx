"use client";

import React, { useEffect, useState } from "react";
import CoffeeDrawer from "./coffee-drawer";
import { useGetJobByIdQuery } from "@/generated/graphql";
import { parseAsInteger, useQueryState } from "nuqs";

const JobCoffeesDrawer = () => {
  const [jobId, setJobId] = useQueryState("job", parseAsInteger);
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetJobByIdQuery({
    variables: {
      id: jobId as number,
    },
  });

  useEffect(() => {
    setIsOpen(!!jobId);
  }, [jobId]);

  return (
    <CoffeeDrawer
      isOpen={isOpen}
      title={`${data?.getJobById?.name} Kahvesi`}
      description={data?.getJobById?.description || ""}
      coffees={data?.getJobById?.coffees || []}
      onChanges={(isOpen) => {
        setIsOpen(isOpen);
        if (!isOpen) {
          setJobId(null);
        }
      }}
    />
  );
};

export default JobCoffeesDrawer;
