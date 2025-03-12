export type RecipeFrontmatter = {
  title: string;
  description: string;
  thumbnail: string;
  type: RecipeTypeEnum;
  vegan: VeganEnum;
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
  NO = "No",
}
