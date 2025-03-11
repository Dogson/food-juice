import React from "react";
import { type RecipeTypeEnum, VeganEnum } from "../../models/recipes.types.ts";
import RecipeTag from "../RecipeTag/RecipeTag.component.tsx";

type RecipeItemProps = {
  url: string;
  title: string;
  image: string;
  type: RecipeTypeEnum;
  vegan: VeganEnum;
};

const RecipeItem: React.FC<RecipeItemProps> = ({
  url,
  title,
  image,
  type,
  vegan,
}) => {
  return (
    <a
      href={url}
      className="relative h-[var(--recipe-card-size)]
        w-[var(--recipe-card-size)] cursor-pointer overflow-hidden rounded-xl
        shadow-md"
    >
      <div
        className="absolute z-1 flex h-full w-full flex-col-reverse
          bg-transparent px-2 py-1"
      >
        <div
          className="absolute top-1 right-1 left-1 flex flex-wrap justify-end
            gap-1"
        >
          {type && <RecipeTag value={type} />}
          {vegan && vegan !== VeganEnum.NO && <RecipeTag value={vegan} />}
        </div>
        <span className="font-title text-sm/4 tracking-tight text-black">
          {title}
        </span>
      </div>
      <img
        style={{
          overflowClipMargin: "unset",
        }}
        className="absolute h-full w-full object-cover"
        src={image}
        alt={`Photo de la recette de ${title}`}
      />
      <div
        className="absolute h-full w-full bg-linear-to-t from-lighter-blue/80
          to-cinnabar/10"
      />
    </a>
  );
};

export default RecipeItem;
