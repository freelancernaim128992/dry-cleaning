import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AdminContainer from "./components/AdminPage/AdminContainer/AdminContainer";
import Review from "./components/AdminPage/Review/Review";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/LoginPage/Login/Login";
import PrivateRoute from "./components/LoginPage/PrivateRoute/PrivateRoute";
import NoMatch from "./components/NoMatch/NoMatch";
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
          <PrivateRoute path="/order">
            <AdminContainer />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
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
