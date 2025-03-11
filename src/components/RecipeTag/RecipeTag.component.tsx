import { RecipeTypeEnum, VeganEnum } from "../../models/recipes.types.ts";
import React, { useMemo } from "react";
import VeganIcon from "../../assets/icons/VeganIcon.component.tsx";
import classNames from "classnames";

type RecipeTagProps = {
  value: RecipeTypeEnum | VeganEnum;
};

const RecipeTag: React.FC<RecipeTagProps> = ({ value }) => {
  const bgColor = useMemo(() => {
    switch (value) {
      case RecipeTypeEnum.APERO:
        return "bg-tag-apero";
      case RecipeTypeEnum.ENTREE:
        return "bg-tag-entree";
      case RecipeTypeEnum.PLAT:
        return "bg-tag-plat";
      case VeganEnum.VEGAN:
        return "bg-tag-vegan";
      case VeganEnum.VEGETARIAN:
        return "bg-tag-vege";
      default:
        return null;
    }
  }, []);

  const Icon = useMemo(() => {
    switch (value) {
      case VeganEnum.VEGAN:
        return VeganIcon;
      default:
        return null;
    }
  }, []);

  return (
    <div
      className={classNames(
        `weight flex h-4 items-center gap-1 rounded-full px-2 text-xxs
        leading-none font-medium`,
        bgColor,
      )}
    >
      {Icon && <Icon className="h-3 stroke-black" />}
      {value}
    </div>
  );
};

export default RecipeTag;
