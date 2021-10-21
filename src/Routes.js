import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import Homepage from "./Homepage";
import JobList from "./JobList";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";

//Make route when nothing found, go home
//TODO: REMEMBER to add EditProfileForm

function Routes({ signUpUser, loginUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/signup">
        <SignUpPage signUpUser={signUpUser} />
      </Route>
      <Route exact path="/login">
        <LoginPage loginUser={loginUser} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
