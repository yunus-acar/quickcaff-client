import React from "react";

const Description = ({ description }: { description: string }) => {
  return <p className="mb-8 mx-auto max-w-xl">{description}</p>;
};

export default Description;
