export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages, pages) => {
  // Homework: implement useMemo to not count this array every time
  // 2:00:30 && 2:00:55
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};