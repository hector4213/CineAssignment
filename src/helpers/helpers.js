export const getIDFromUrl = (charURL) => {
  const regex = /\/people\/(\d+)\//;
  const test = charURL.match(regex);
  return test[1];
};
export const getPageNum = (nextPage, prevPage) => {
  const regex = /(\d+)/;
  if (nextPage === null) {
    const test = prevPage.match(regex);
    return Number(test[0]) + 1;
  }
  const test = nextPage.match(regex);
  return test[0] - 1;
};

export default {
  getIDFromUrl,
  getPageNum,
};
