import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/HomePage/Home/Home";
import Login from "./components/LoginPage/Login/Login";
import PrivateRoute from "./components/LoginPage/PrivateRoute/PrivateRoute";
import NoMatch from "./components/NoMatch/NoMatch";
import DashBoard from "./components/UserProfilePage/DashBoard/DashBoard";
export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
