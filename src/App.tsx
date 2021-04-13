import { ConnectedRouter, push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Router, Switch, useHistory } from "react-router";
import "./App.css";
import { history } from "./redux/configStore";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>home</div>
      <button onClick={() => dispatch(push("/1"))}>click</button>
    </div>
  );
};

const About = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      <div>about</div>
      <button onClick={() => dispatch(push("/"))}>click</button>
    </div>
  );
};

function App() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/1" component={About} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default App;
