import Home from "../pages/Home";
import InputValues from "../pages/InputValues";
import Login from "../pages/login";
import SetPassword from "../pages/SetPassword";
import SignUp from "../pages/Sign-up";
import Result from '../pages/Result'
import { RouteLinks } from "./RouteLinks";

export const PublicRoute = [
  {
    component: <Home />,
    path: RouteLinks.home,
    exact: true,
  },
  {
    component: <InputValues />,
    path: RouteLinks.inputValue,
  },
  {
    component: <Result />,
    path: RouteLinks.result,
  },
];

export const AuthRoute = [
  {
    component: <Login />,
    path: RouteLinks.login,
  },
  {
    component: <SignUp />,
    path: RouteLinks.signup,
  },
  {
    component: <SetPassword />,
    path: RouteLinks.setpassword,
  },

];
