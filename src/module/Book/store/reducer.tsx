import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionType, createCustomAction, getType } from "typesafe-actions";
import { AppState } from "../../../redux/reducer";
import { Book } from "./model";

export interface BookState {
  books: Book[];
}

export const addBookAction = createCustomAction("books/add", (book: Book) => ({
  book,
}));

const actions = {
  addBookAction,
};

type ActionT = ActionType<typeof actions>;

export const addBook = (
  book: Book
): ThunkAction<Promise<void>, AppState, null, Action<string>> => {
  return async (dispatch, getState) => {
    await dispatch(addBookAction(book));
  };
};

export default function bookReducer(state = [], action: ActionT) {
  switch (action.type) {
    case getType(addBookAction):
      return [...state, action.book];
    default:
      return state;
  }
}
