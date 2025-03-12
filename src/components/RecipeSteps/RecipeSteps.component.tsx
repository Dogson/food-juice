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
            <li key={index} className="flex flex-col">
              <div className="font-bold">
                <span className="inline-block w-8">{index + 1}.</span>
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
