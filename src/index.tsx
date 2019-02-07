import * as React from "react";
import { render } from "react-dom";

import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";
import "./styles.css";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => <div>{match.url}</div>;
const Parameters = ({ match, location, history }) => {
  console.log(match);
  console.log(location);
  console.log(history);
  if (match.params.id === "redirect") {
    return <Redirect to="/home" />;
  }

  return <div>{match.params.id}</div>;
};
const style = {
  color: "red"
};
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>{" "}
            </li>
            <li>
              <NavLink activeStyle={style} to="/about">
                {" "}
                Nav{" "}
              </NavLink>
              //use it to active style
            </li>
          </ul>
          <hr />
          // url paramerers
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect path="/home" to="/" />
            <Route path="/paras/ahahah" component={About} />
            <Route path="/paras/:id" component={Parameters} />
          </Switch>
          // use exact
          <Route exact path="/home_exact" component={Home} />
          <Route path="/about" component={About} />
          // use strict
          <Route strict path="/about3/" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/about2" render={() => <div> about2's div</div>} />
          <hr />
          <Route children={props => <footer>always rendered </footer>} />
          <Prompt when={true} message="want to leave?" />
        </div>
      </BrowserRouter>
    </div>
  );
}
// 2 descriptions for router
// exact
// strict
// navlink
// similar to link, but get a better css result, or trigger mehtod

const rootElement = document.getElementById("root");
render(<App />, rootElement);
