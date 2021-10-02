import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCompany from "./add-company";
export default function Companies() {
  const { path, url } = useRouteMatch();
  console.log({ path, url });
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={path}>
            common
            <Link to={url + "/add-company"}>Add Company</Link>
          </Route>
          <Route exact path={path + "/add-company"}>
            <AddCompany />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
