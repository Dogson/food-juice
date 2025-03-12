import RecipeTag from "../RecipeTag/RecipeTag.component.tsx";
import { type RecipeTypeEnum, VeganEnum } from "../../models/recipes.types.ts";
import { FaRegEdit } from "react-icons/fa";
import Icon from "../Icon/Icon.component.tsx";

type RecipeInfosProps = {
  title: string;
  description: string;
  type: RecipeTypeEnum;
  vegan: VeganEnum;
  thumbnail: string;
};

const RecipeInfos = ({
  title,
  description,
  type,
  vegan,
  thumbnail,
}: RecipeInfosProps) => {
  const path = window.location.pathname;
  const editPath = `https://miam.gwen.cool/admin/#/collections/recettes/entries/${path.split("/")[2]}`;

  return (
    <div className="flex flex-row gap-5">
      <img
        src={thumbnail}
        alt={title}
        className="h-55 w-55 flex-shrink-0 flex-grow-0 rounded-lg border-2
          border-cinnabar object-cover object-center"
      />
      <div className="flex flex-col gap-5">
        <div className="mx-1 flex gap-2">
          <RecipeTag bigger value={type} />
          {vegan !== VeganEnum.NO && <RecipeTag bigger value={vegan} />}
        </div>
        <span className="mx-1 font-subtitle text-3xl">{title}</span>
        <span className="mx-1 text-sm opacity-50">{description}</span>
        <a
          href={editPath}
          target="_blank"
          rel="noreferrer"
          className="flex w-40 items-center justify-between rounded-lg border-2
            border-cinnabar px-2 py-1 shadow-md"
        >
          <span className="text-xs/5 font-bold text-cinnabar">
            Modifier la recette
          </span>

          <Icon
            icon={<FaRegEdit />}
            color={"var(--color-cinnabar)"}
            size="1em"
          />
        </a>
      </div>
    </div>
  );
};

export default RecipeInfos;
