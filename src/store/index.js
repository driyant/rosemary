import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initState = {
  isLoading: false,
  categories: [],
  menu: [],
  openingHours: []
}

const reducer = (state = initState, action) => {
  if (action.type === "setLoadingTrue") {
    return {
      ...state,
      isLoading: true
    }
  }
  if (action.type === "setLoadingFalse") {
    return {
      ...state,
      isLoading: false
    }
  }
  if (action.type === 'FETCH_CATEGORIES') {
    return {
      ...state,
      categories: action.payload
    }
  }
  if (action.type === "FETCH_MENU") {
    return {
      ...state,
      menu: action.payload,
    }
  }
  if (action.type === "FETCH_OPENING_HOURS") {
    return {
      ...state,
      openingHours: action.payload
    }
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;