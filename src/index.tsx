import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import ConnectedIntlProvider from "./module/intl/components/ConnectIntlProvider";
import { PersistGate } from "redux-persist/integration/react";
import configStore, { history } from "./redux/configStore";

const { store, persistor } = configStore({});

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ConnectedIntlProvider>
        <App />
      </ConnectedIntlProvider>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
