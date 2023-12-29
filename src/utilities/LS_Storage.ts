export const getItemFromLS = (key: string) => {
  let value = sessionStorage.getItem(key);
  if (value) return JSON.parse(value);
  else return "";
};

export const removeItemFromLS = (key: string) => sessionStorage.removeItem(key);

export const setItemInLS = (key: string, data: string) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};
