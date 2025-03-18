import { type Recipe, VeganEnum } from "../../models/recipes.types.ts";
import RecipesList from "./RecipesList.component.tsx";
import SearchBarInput from "../SearchBarInput/SearchBarInput.component.tsx";
import { useEffect, useState } from "react";
import { getWordsFromString, sanitizeString } from "../../helpers/text.ts";

type RecipesListModuleProps = {
  recipes: Recipe[];
};

const RecipesListModule = ({ recipes }: RecipesListModuleProps) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchValue, setSearchValue] = useState("");

  const handleFilterRecipe = (value: string) => {
    const searchWords = getWordsFromString(value);

    const filteredRecipes = recipes.filter((recipe) => {
      const recipeWords = getWordsFromString(recipe.frontmatter.title);
      return searchWords.every((searchWord) =>
        recipeWords.some((recipeWord) => {
          const isVegan = recipe.frontmatter.vegan === VeganEnum.VEGAN;
          return (
            sanitizeString(recipeWord).includes(sanitizeString(searchWord)) ||
            sanitizeString(recipe.frontmatter.vegan).includes(
              sanitizeString(searchWord),
            ) ||
            (isVegan &&
              sanitizeString(VeganEnum.VEGETARIAN).includes(
                sanitizeString(searchWord),
              )) ||
            sanitizeString(recipe.frontmatter.type).includes(
              sanitizeString(searchWord),
            )
          );
        }),
      );
    });

    setFilteredRecipes(filteredRecipes);
  };

  useEffect(() => {
    handleFilterRecipe(searchValue);
  }, [searchValue]);

  return (
    <>
      <RecipesList recipes={filteredRecipes} />
      <div
        className="fixed bottom-0 left-[50%] z-1 flex h-22 w-full max-w-110
          -translate-x-1/2 transform items-center gap-3 px-3 pt-3"
      >
        <SearchBarInput onChange={setSearchValue} value={searchValue} />
        <a
          className="flex h-9 w-9 items-center justify-center rounded-full
            bg-gambodge text-2xl shadow-md"
          href={"/admin/#/collections/recettes/new"}
        >
          +
        </a>
      </div>
    </>
  );
};

export default RecipesListModule;
