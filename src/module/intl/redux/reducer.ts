import { ActionType, createCustomAction, getType } from "typesafe-actions";

export interface IntlState {
  locale: string;
}

export const setLocaleAction = createCustomAction(
  "intl/set",
  (locale: string) => ({
    locale,
  })
);

const actions = {
  setLocaleAction,
};

type ActionT = ActionType<typeof actions>;

export default function intlReducer(state = { locale: "en" }, action: ActionT) {
  switch (action.type) {
    case getType(setLocaleAction):
      return { ...state, locale: action.locale };
    default:
      return state;
  }
}
