import { SetPageSelectedValueAction, State } from "../Types/ReduxType"

const initialState: State = {
  pageSelectedName: '',
};

const rootReducer = (state = initialState, action: SetPageSelectedValueAction) => {
  switch (action.type) {
      case 'SET_PAGE_SELECTED':
          return {
              ...state,
              pageSelectedName: action.payload,
          };
      default:
          return state;
  }
};

export default rootReducer;