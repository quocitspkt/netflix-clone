import React, { useState, useContext, useEffect } from "react";
import request from "./request";
import { JumbotronContainer } from "../src/containers/jumbotron";
import Jumbotron from "./components/jumbotron";
import jumboData from "../src/fixtures/jumbo.json";
import { FooterContainer } from "./containers/footer";
import { FaqsContainer } from "./containers/faqs";
import * as ROUTES from "./constants/routes";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Browse, SignIn, SignUp, Home } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import { FirebaseContext } from "../src/context/firebase";

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      {/* <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.BROWSE}
          >
            <Browse />
          </IsUserRedirect>
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch> */}

      {/* <Route exact path="/signin">
        <SignIn></SignIn>
      </Route>
      <Route exact path="/signup">
        <SignUp></SignUp>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/browse">
        <Browse></Browse>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route> */}

      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
