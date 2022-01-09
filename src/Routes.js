import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Components/Loader/Loader";

export default function Routes() {
  const Login = lazy(() => import("./Pages/Login/Login"));
  const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
  const Test = lazy(() => import("./Pages/Test/Test"));

  return (
    <div>
      <ToastContainer />
      <Router>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/" component={Login} exact />
            <Route path="/test" component={Test} exact />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}
