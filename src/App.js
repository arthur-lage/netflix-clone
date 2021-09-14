import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home'
import ChangeProfile from "./pages/ChangeProfile";
import CreateProfile from './pages/CreateProfile'
import EditProfile from './pages/EditProfile'

import UserContextProvider from "./contexts/UserContext";

function App() {

  return (
    <Router>
      <UserContextProvider>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={ChangeProfile} />
          <Route path="/profile/create" exact component={CreateProfile} />
          <Route path="/profile/edit" exact component={EditProfile} />
        </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;
