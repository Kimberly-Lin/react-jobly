import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import Homepage from "./Homepage";
import JobList from "./JobList";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm"

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
        <SignUpForm signUpUser={signUpUser} />
      </Route>
      <Route exact path="/login">
        <LoginForm loginUser={loginUser} />
      </Route>
      <Route exact path="/profile">
        <ProfileForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
