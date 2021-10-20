import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import Homepage from "./Homepage";
import JobList from "./JobList";

//Make route when nothing found, go home
function Routes() {
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
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
