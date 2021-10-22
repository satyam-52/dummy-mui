import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Routes() {
  const Login = lazy(() => import("./Pages/Login/Login"));
  const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
  return (
    <div>
      <ToastContainer />
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/" component={Login} exact />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}
