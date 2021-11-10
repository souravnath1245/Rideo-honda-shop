import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch
} from "react-router-dom";
// import Navlink from "./Shared/Navlink";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./Login/Login";
import Register from "./Login/Register";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navlink/> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/register">
            <Register />
          </Route>
          <Route   path="*">
            <NotFound />
          </Route>
          {/* <Route path="/banner">
            <Users />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
