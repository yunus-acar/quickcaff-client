import Image from "@/components/image";
import {
  GetCoffeeDocument,
  GetCoffeeQuery,
  GetCoffeeQueryVariables,
  Temperature,
} from "@/generated/graphql";
import apolloClient from "@/lib/apollo";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

interface CoffeePageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: "QuickCaff",
  description: "QuickCaff ile en sevdiğiniz kahveyi kolayca bulun!",
};

const Coffee = async ({ params }: CoffeePageProps) => {
  if (!params.slug) {
    return redirect("/");
  }

  const { data } = await apolloClient().query<
    GetCoffeeQuery,
    GetCoffeeQueryVariables
  >({
    query: GetCoffeeDocument,
    variables: params,
  });

  if (!data?.getCoffee) {
    return redirect("/");
  }

  const {
    image,
    name,
    description,
    caffeine_content,
    origin,
    density,
    flavors,
    history,
    others,
    pairing_suggestions,
    serving_temperature,
    temperature,
  } = data.getCoffee;

  metadata.title = `${name} - QuickCaff`;
  metadata.description = description;

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <Image image={image} alt={name} />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{description}</p>
            {history && (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Tarihçe
                </h2>
                <p className="text-gray-700">{history}</p>
              </>
            )}

            <hr className="my-4 border-gray-300" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detay</h2>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-700">
                <strong>Kafein:</strong> <span>{caffeine_content}</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <strong>Menşei:</strong> <span>{origin}</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <strong>Yoğunluk:</strong> <span>{density}</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <strong>Lezzetler:</strong> <span>{flavors.join(", ")}</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <strong>Diğer:</strong> <span>{others.join(", ")}</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <strong>Eşleştirme Önerileri:</strong>{" "}
                <span>{pairing_suggestions.join(", ")}</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <strong>Servis Sıcaklığı:</strong>{" "}
                <span>{serving_temperature}</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <strong>Sıcaklık:</strong>{" "}
                <span>
                  {temperature === Temperature.Iced ? "Soğuk" : "Sıcak"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Coffee;
