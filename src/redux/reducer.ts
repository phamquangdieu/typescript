import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import bookReducer, { BookState } from "../module/Book/store/reducer";
import intlReducer, { IntlState } from "../module/intl/redux/reducer";

export interface AppState {
  router: RouterState;
  intl: IntlState;
  books: BookState;
}

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    intl: intlReducer,
    books: bookReducer,
  });
}
