import type { Recipe } from "../../models/recipes.types.ts";
import RecipesList from "./RecipesList.component.tsx";
import SearchBarInput from "../SearchBarInput/SearchBarInput.component.tsx";
import { useEffect, useState } from "react";
import { sanitizeString } from "../../helpers/text.ts";

type RecipesListModuleProps = {
  recipes: Recipe[];
};

const RecipesListModule = ({ recipes }: RecipesListModuleProps) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchValue, setSearchValue] = useState("");

  const handleFilterRecipe = (value: string) => {
    setFilteredRecipes(
      recipes.filter((recipe) =>
        sanitizeString(recipe.frontmatter.title).includes(
          sanitizeString(value),
        ),
      ),
    );
  };

  useEffect(() => {
    handleFilterRecipe(searchValue);
  }, [searchValue]);

  return (
    <>
      <RecipesList recipes={filteredRecipes} />
      <div
        className="fixed bottom-0 z-1 flex h-22 w-full items-center px-8 pt-3"
      >
        <SearchBarInput onChange={setSearchValue} value={searchValue} />
      </div>
    </>
  );
};

export default RecipesListModule;
