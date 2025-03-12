import type { RecipeStep } from "../../models/recipes.types.ts";
import RecipeBlock from "../RecipeBlock/RecipeBlock.component.tsx";

type RecipeStepsProps = {
  steps: RecipeStep[];
};

const RecipeSteps = ({ steps }: RecipeStepsProps) => {
  return (
    <RecipeBlock label="Recette">
      <ol className="flex flex-col gap-3">
        {steps &&
          steps.map((step, index) => (
            <li key={index} className="flex flex-col gap-1">
              <div className="text-md flex text-base/5 font-bold">
                <span className="inline-block w-8 flex-shrink-0 flex-grow-0">
                  {index + 1}.
                </span>
                <span>{step.description}</span>
              </div>
              <div className="pl-8 text-sm font-thin">{step.details}</div>
            </li>
          ))}
      </ol>
    </RecipeBlock>
  );
};

export default RecipeSteps;
