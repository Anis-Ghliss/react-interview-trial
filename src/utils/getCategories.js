export const filtredData = (categories) => {
  const temp = [];
  categories.map((item) => {
    return temp.push(item.value);
  });
  return temp;
};

export const getCategories = (arr) => {
  const category = new Set();
  arr.map((item) => {
    return category.add(item.category);
  });
  const categories = [];
  Array.from(category).map((item) => {
    return categories.push({ value: item, label: item });
  });
  return categories;
};
