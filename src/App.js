import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from "./components/AdminPage/AddService/AddService";
import AdminContainer from "./components/AdminPage/AdminContainer/AdminContainer";
import MakeAdmin from "./components/AdminPage/MakeAdmin/MakeAdmin";
import Review from "./components/AdminPage/Review/Review";
import BlogPage from "./components/BlogPage/BlogPage";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/LoginPage/Login/Login";
import PrivateRoute from "./components/LoginPage/PrivateRoute/PrivateRoute";
import NoMatch from "./components/NoMatch/NoMatch";
import ServicePage from "./components/ServicePage/ServicePage";
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
          <Route path="/services">
            <ServicePage />
          </Route>
          <Route path="/blogs">
            <BlogPage />
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
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
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
