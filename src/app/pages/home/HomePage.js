import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Builder from "./Builder";
import Dashboard from "./Dashboard";
import Account from './Account/index';
import Configuration from './Configuration/index';
import ManageNumbers from './ManageNumbers/index';
import ActivityLog from "./ActivityLog";
import Invoices from "./Invoices";
import Payments from "./Payments";
import CallLog from "./CallLog";
import { LayoutSplashScreen } from "../../../_metronic";

export default function HomePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/builder" component={Builder} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/account" component={Account} />
        <Route path="/configuration" component={Configuration} />
        <Route path="/manage_numbers" component={ManageNumbers}/>
        <Route path="/activity_log" component={ActivityLog}/>
        <Route path="/invoices" component={Invoices}/>
        <Route path="/payments" component={Payments}/>
        <Route path="/call_log" component={CallLog}/>
      </Switch>
    </Suspense>
  );
}
