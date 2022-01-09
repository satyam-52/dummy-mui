import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";
import * as ROUTES from "./Routes";

export default function RouterComponent() {
  const Login = lazy(() => import("../Pages/Login/Login"));
  const Test = lazy(() => import("../Pages/Test/Test"));

  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route path={ROUTES.HOME} component={Login} exact />
            <Route path={ROUTES.TEST} component={Test} exact />
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}
