import type { RecipeIngredient } from "../../models/recipes.types.ts";
import RecipeBlock from "../RecipeBlock/RecipeBlock.component.tsx";
import { useState } from "react";
import classNames from "classnames";
import MiniCheckbox from "../MiniCheckbox/MiniCheckbox.component.tsx";

type RecipeIngredientsProps = {
  ingredients: RecipeIngredient[];
  portions: number;
};

const RecipeIngredients = ({
  ingredients,
  portions,
}: RecipeIngredientsProps) => {
  const [selectedIngredients, setSelectedIngredients] = useState<boolean[]>(
    ingredients.map((_) => false),
  );
  const [newPortions, setNewPortions] = useState(portions);

  const addPortion = () => {
    setNewPortions(newPortions + 1);
  };

  const removePortion = () => {
    setNewPortions(newPortions - 1);
  };

  const handleToggleIngredientSelection = (index: number) => {
    setSelectedIngredients([
      ...selectedIngredients.slice(0, index),
      !selectedIngredients[index],
      ...selectedIngredients.slice(index + 1),
    ]);
  };

  const computeNewQuantity = (quantity: number, unit?: string) => {
    const newQuantity = (quantity * newPortions) / portions;

    return unit ? newQuantity.toFixed(2) : Math.max(Math.round(newQuantity), 1);
  };

  return (
    <RecipeBlock label="Ingredients">
      <div className="flex flex-col gap-6">
        <div
          className="bg- flex h-10 w-full items-center rounded-full bg-indigo"
        >
          <button
            onClick={removePortion}
            disabled={newPortions === 1}
            className={classNames(
              `mb-[-1px] ml-[-1px] flex h-11 w-11 items-center justify-center
              rounded-full bg-gambodge text-4xl`,
              { "bg-grey-disabled": newPortions === 1 },
            )}
          >
            -
          </button>
          <span className="flex-1 text-center text-white">
            {newPortions} personnes
          </span>
          <button
            onClick={addPortion}
            className="mr-[-1px] mb-[-1px] flex h-11 w-11 items-center
              justify-center rounded-full bg-gambodge text-4xl"
          >
            +
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {ingredients.map((ingredient, idx) => (
            <button
              key={ingredient.name}
              onClick={() => handleToggleIngredientSelection(idx)}
              className={classNames(
                `relative flex h-13 min-w-30 flex-col items-start justify-center
                rounded-lg border-1 border-white-green bg-gambodge p-3
                shadow-md`,
                selectedIngredients[idx] && "opacity-50 shadow-none",
              )}
            >
              <span className="absolute top-1 right-1">
                <MiniCheckbox
                  checked={selectedIngredients[idx]}
                  onChange={() => handleToggleIngredientSelection(idx)}
                />
              </span>
              <span className="pr-3 text-xs/5 opacity-90">
                {ingredient.name}
              </span>
              <span className="text-base/5 font-bold">
                {computeNewQuantity(ingredient.quantity)} {ingredient.unit}
              </span>
            </button>
          ))}
        </div>
      </div>
    </RecipeBlock>
  );
};

export default RecipeIngredients;
