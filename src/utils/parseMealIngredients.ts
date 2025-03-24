import { IIngredient, IMeal } from "src/@types/meals";

export const parseMealIngredients = (meal: IMeal) => {
  if (meal) {
    const ingredients: IIngredient[] = [];

    for (let i = 1; i <= 20; i++) {
      const name = meal[`strIngredient${i}`]?.trim();
      const measure = meal[`strMeasure${i}`]?.trim();

      if (name && name !== "") {
        ingredients.push({ name, measure });
      }
    }

    return ingredients;
  }
};
