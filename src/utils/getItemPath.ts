export const getItemPath = (
  path: string,
  params: Record<string, string | number>
) => {
  // eng: We replace only the specified parameters in the path with their values from the params object
  // ukr: Замінюємо тільки вказані параметри в шляху на їх значення з об'єкту params
  return path.replace(/:(\w+)/g, (_, key: string | number) =>
    String(params[key])
  );
};

// example of usage
// const path = getItemPath("/:id?meal=:meal", { id: 1, meal: "breakfast" });
// console.log(path); // "/1?meal=breakfast"
