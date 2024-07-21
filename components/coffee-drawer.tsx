import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { CoffeesFragment } from "@/generated/graphql";
import CoffeeCard from "./coffee-card";
import { Badge } from "./ui/badge";

interface CoffeeDrawerProps {
  isOpen: boolean;
  title: string;
  description: string;
  coffees: CoffeesFragment[];
  onChanges: (isOpen: boolean) => void;
}

const CoffeeDrawer = ({
  isOpen,
  title,
  description,
  coffees,
  onChanges,
}: CoffeeDrawerProps) => {
  return (
    <Drawer
      onOpenChange={(isOpen) => {
        onChanges(isOpen);
      }}
      open={isOpen}
    >
      <DrawerContent className="w-full md:max-w-7xl mx-auto">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 ">
            {coffees.map((coffee) => (
              <CoffeeCard
                slug={coffee.slug}
                key={coffee.id}
                image={coffee.image}
              >
                <Badge className="mb-2">{coffee.temperature}</Badge>
                <p>
                  <strong>{coffee.name}</strong>
                </p>
                <p>{coffee.description}</p>
                <p>{coffee.caffeine_content}</p>
              </CoffeeCard>
            ))}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CoffeeDrawer;
