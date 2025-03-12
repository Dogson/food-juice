import React from "react";

type RecipeBlockProps = {
  label: string;
  children: React.ReactNode;
};

const RecipeBlock = ({ label, children }: RecipeBlockProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-title text-xl underline">{label}</span>
      <div>{children}</div>
    </div>
  );
};

export default RecipeBlock;
