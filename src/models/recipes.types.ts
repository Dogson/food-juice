export type RecipeIngredient = {
  name: string;
  quantity: number;
  unit?: string;
};

export type RecipeStep = {
  description: string;
  details?: string;
};

export type RecipeFrontmatter = {
  title: string;
  description: string;
  thumbnail: string;
  type: RecipeTypeEnum;
  vegan: VeganEnum;
  ingredients: RecipeIngredient[];
  portions: number;
  steps: RecipeStep[];
};

export type Recipe = {
  url: string;
  frontmatter: RecipeFrontmatter;
};

export enum RecipeTypeEnum {
  APERO = "Apéro",
  ENTREE = "Entrée",
  PLAT = "Plat",
  DESSERT = "Dessert",
}

export enum VeganEnum {
  VEGAN = "Végan",
  VEGETARIAN = "Végé",
  NO = "Non",
}
