import { connect } from "react-redux";
import viMessages from "../vi.json";
import enMessages from "../en.json";
import { IntlProvider } from "react-intl";
import { AppState } from "../../../redux/reducer";

function getMessages(locale: string) {
  if (locale === "vi") {
    return viMessages as Record<string, string>;
  }
  return enMessages as Record<string, string>;
}

function mapStateToProps(state: AppState) {
  return {
    locale: state.intl.locale,
    messages: getMessages(state.intl.locale),
  };
}

export default connect(mapStateToProps)(IntlProvider);
