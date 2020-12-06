import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";
import App from "./App";
import Loader from "./components/UI/Loader/Loader";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";

import firebase from "./config/fbConfig";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const config = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

const rffProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isLoaded(auth)) {
    return <Loader />;
  } else {
    return children;
  }
}

const root = document.getElementById("root");

const app = (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render(app, root);

reportWebVitals();
