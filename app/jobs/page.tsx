import Button from "@/components/job-query-button";
import {
  GetJobsDocument,
  GetJobsQuery,
  GetJobsQueryVariables,
} from "@/generated/graphql";
import apolloClient from "@/lib/apollo";
import { Metadata } from "next";
import React from "react";
import JobCoffeesDrawer from "@/components/job-coffees.drawer";
import Title from "@/components/title";
import Description from "@/components/description";

export const metadata: Metadata = {
  title: "QuickCaff - Mesleğinize Uygun Kahveler",
  description:
    "Mesleğinize uygun kahve seçimi yapın ve gününüzü daha keyifli hale getirin.",
};

const Jobs = async () => {
  const { data, loading } = await apolloClient().query<
    GetJobsQuery,
    GetJobsQueryVariables
  >({
    query: GetJobsDocument,
  });

  return (
    <main>
      <div className="container p-padding text-center">
        <Title title="Mesleğinize Uygun Kahve Seçimi" />
        <Description description="Hangi iş alanında çalışıyorsunuz? Size en uygun kahve seçeneklerini belirlemek için mesleğinizi seçin." />

        <div className="flex items-center max-w-xl mx-auto justify-center flex-wrap gap-4 mt-8">
          {data.getJobs.map((job) => (
            <Button
              key={job.id}
              queryKey="job"
              label={job.name}
              value={job.id}
            />
          ))}
        </div>

        <JobCoffeesDrawer />
      </div>
    </main>
  );
};

export default Jobs;
