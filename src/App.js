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

import UserContextProvider from "./contexts/UserContext";
import React, { useEffect, useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem("netflix-clone:isLogged") !== null){
      setIsLogged(JSON.parse(sessionStorage.getItem("netflix-clone:isLogged")))
    } else {
      setIsLogged(false)
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("netflix-clone:isLogged", JSON.stringify(isLogged))
  }, [isLogged])

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
              {isLogged ? <Redirect to="/" /> : <Login setIsLogged={setIsLogged} />}
            </Route>
            <Route path="/register" exact>
              {isLogged ? <Redirect to="/" /> : <Register setIsLogged={setIsLogged} />}
            </Route>
          </div>
        </Switch>
      </UserContextProvider>
    </Router>
  );
}

export default App;
