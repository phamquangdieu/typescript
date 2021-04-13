import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducer";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const composeEnhancers =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
};

export default function configStore(preloadedState?: any) {
  const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(history)
  );
  // const store = createStore(
  //   persistedReducer,
  //   preloadedState,
  //   composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
  // );
  // const persistor = persistStore(store as any);
  // return { store, persistor };
  // const composeEnhancer: typeof compose =
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
  const persistor = persistStore(store as any);
  return { store, persistor };
}
