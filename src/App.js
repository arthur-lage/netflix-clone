import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import ChangeProfile from "./pages/ChangeProfile";
import CreateProfile from "./pages/CreateProfile";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";

import UserContextProvider, { UserContext } from "./contexts/UserContext";
import React, { useContext } from "react";

function App() {
  const { isLogged } = useContext(UserContext);

  return (
    <Router>
      <UserContextProvider>
        <Switch>
          <div className="App">
            <Route path="/" exact>
              {isLogged ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/profile" exact>
              {isLogged ? <ChangeProfile /> : <Redirect to="/login" />}
            </Route>
            <Route path="/profile/create" exact>
              {isLogged ? <CreateProfile /> : <Redirect to="/login" />}
            </Route>
            <Route path="/profile/edit" exact>
              {isLogged ? <EditProfile /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login" exact>
              {isLogged ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/register" exact>
              {isLogged ? <Redirect to="/" /> : <Register />}
            </Route>
          </div>
        </Switch>
      </UserContextProvider>
    </Router>
  );
}

export default App;
