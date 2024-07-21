"use client";
import imageLoader from "@/lib/image-loader";
import NextImage from "next/image";
import React from "react";

const Image = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <NextImage
      width={500}
      height={500}
      src={image}
      alt={alt}
      loader={imageLoader}
      objectFit="cover"
      className="w-full h-auto rounded-lg object-cover"
    />
  );
};

export default Image;
