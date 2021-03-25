export const getIDFromUrl = (charURL) => {
  const regex = /\/people\/(\d+)\//;
  const test = charURL.match(regex);
  return test[1];
};

export default {
  getIDFromUrl,
};
