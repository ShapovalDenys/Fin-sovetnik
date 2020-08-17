import { createStore } from 'redux';

// Action types - is just a constant. MUST have a unique value.
const MONEY_VALUE = 'MONEY_VALUE';

// Action creators - a function returning an action object
export const setMoneyValue = ( moneyValue = 30000) => ({ type: MONEY_VALUE, moneyValue });

// Selectors - a function receiving Redux state and returning some data from it
export const getMoneyValue = (state) => state.moneyValue;

// Initial state

const initialState = {
  moneyValue: 30000
};

// rootReducer - this function is called after dispatching an action
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MONEY_VALUE:
      return { ...state,
        moneyValue: action.moneyValue,
      };

    default:
      return state;
  }
};

// The `store` should be passed to the <Provider store={store}> in `/src/index.tsx`
const store = createStore(
  rootReducer,
);

export default store;
