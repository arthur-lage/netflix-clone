import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home'
import ChangeProfile from "./pages/ChangeProfile";

import UserContextProvider from "./contexts/UserContext";

function App() {

  return (
    <Router>
      <UserContextProvider>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={ChangeProfile} />
        </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;
