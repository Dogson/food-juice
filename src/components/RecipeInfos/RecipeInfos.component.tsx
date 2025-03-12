import RecipeTag from "../RecipeTag/RecipeTag.component.tsx";
import { type RecipeTypeEnum, VeganEnum } from "../../models/recipes.types.ts";

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
  console.log(thumbnail);

  return (
    <div className="flex flex-col gap-5">
      <img
        src={thumbnail}
        alt={title}
        className="h-55 w-55 rounded-lg border-2 border-cinnabar"
      />
      <span className="mx-1 font-subtitle text-3xl">{title}</span>
      <span className="mx-1 text-sm opacity-50">{description}</span>
      <div className="mx-1 flex gap-2">
        <RecipeTag value={type} />
        <RecipeTag value={vegan} />
      </div>
    </div>
  );
};

export default RecipeInfos;
