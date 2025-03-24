export const getImageBySize = (
  path: string,
  size: "small" | "medium" | "large"
) => `${path}/${size}`;
