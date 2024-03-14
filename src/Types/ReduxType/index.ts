export interface SetPageSelectedValueAction {
  type: 'SET_PAGE_SELECTED';
  payload: string
}

export interface State {
  pageSelectedName: string
}