import type { Recipe } from "../../models/recipes.types.ts";
import RecipeItem from "./RecipeItem.component.tsx";
import React from "react";

export type RecipesListProps = {
  recipes: Recipe[];
};

const RecipesList: React.FC<RecipesListProps> = ({ recipes }) => {
  return (
    <div
      className="mb-20 grid grid-cols-[repeat(auto-fit,var(--recipe-card-size))]
        justify-center gap-5"
    >
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.url}
          url={recipe.url}
          title={recipe.frontmatter.title}
          image={recipe.frontmatter.thumbnail}
          type={recipe.frontmatter.type}
          vegan={recipe.frontmatter.vegan}
        />
      ))}
    </div>
  );
};

export default RecipesList;
