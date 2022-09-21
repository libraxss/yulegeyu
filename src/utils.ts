export const imgPath = (img: string) => {
  const url = location.origin + location.pathname;
  return url + img;
};
