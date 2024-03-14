export const setPageSelected = (name: string) => {
  return {
      type: 'SET_PAGE_SELECTED',
      payload: name,
  };
};