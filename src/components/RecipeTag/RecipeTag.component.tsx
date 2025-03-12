import { RecipeTypeEnum, VeganEnum } from "../../models/recipes.types.ts";
import React, { useMemo } from "react";
import VeganIcon from "../../assets/icons/VeganIcon.component.tsx";
import classNames from "classnames";

type RecipeTagProps = {
  value: RecipeTypeEnum | VeganEnum;
  bigger?: boolean;
};

const RecipeTag: React.FC<RecipeTagProps> = ({ value, bigger = false }) => {
  const bgColor = useMemo(() => {
    switch (value) {
      case RecipeTypeEnum.APERO:
        return "bg-tag-apero";
      case RecipeTypeEnum.ENTREE:
        return "bg-tag-entree";
      case RecipeTypeEnum.PLAT:
        return "bg-tag-plat";
      case RecipeTypeEnum.DESSERT:
        return "bg-tag-dessert";
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
        `weight flex items-center gap-1 rounded-full px-2 leading-none
        font-medium`,
        bgColor,
        { "h-4 text-xxs": !bigger },
        { "h-5 text-sm": bigger },
      )}
    >
      {Icon && (
        <Icon
          className={classNames("stroke-black", {
            "h-3": !bigger,
            "h-4": bigger,
          })}
        />
      )}
      {value}
    </div>
  );
};

export default RecipeTag;
