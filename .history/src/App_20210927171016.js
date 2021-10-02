import React, { useContext } from "react";
import { AuthContext } from "./contexts/auth.context";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import { useHistory } from "react-router-dom";
import UnauthenticatedApp from "./unauthenticated-app";
import Companies from "./screens/companies";
import DashboardMenu from "./components/dashboard-menu";
import DashboardNotification from "./components/dashboard-notifications";
import DashboardTop from "./components/dashboard-top";
import { ToastContainer } from "react-toastify";
import TransporterDetails from "./screens/transporter/components/transporter-details";
import Transporters from "./screens/transporter/components/transporters";
import Enquiry from "./screens/enquiry";
import Quatation from "./screens/trader-flow/quatation";
import NegotiationChat from "./screens/trader-flow/negotiationChat";
import Agreement from "./screens/trader-flow/agreement";
import AgreementSecound from "./screens/trader-flow/agreementSecound";
import AgreementList from "./screens/trader-flow/agreementList";
import MyEnquiry from "./screens/trader-flow/myEnquiry";
import Splash from "./screens/transporter/home/splash/index";
import Login from "./screens/transporter/home/login";
import CreateTrip from "./screens/trip/create-trip";
import Bilty from "./screens/bilty";
import BuiltyList from "./screens/bilty/bilty-list";
import CreateChallan from "./screens/challan/create-challan";
import HomePage from "./screens/transporter/home/homepage";
import DashboardPage from "./screens/transporter/dashboard";
import TripTracking from "./screens/transporter/tripTracking";
import Contract from "./screens/transporter/contract";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={UnauthenticatedApp} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/transport" component={Transporters} />
        <ProtectedRoute exact path="/enquiry" component={Enquiry} />
        <ProtectedRoute exact path="/transporter/:id" component={TransporterDetails} />
        <Route exact path="/transport/splash" component={Splash} />
        <Route exact path="/transport/login" component={Login} />
        <Route exact path="/transport/home" component={HomePage} />
        <Route exact path="/transport/dashboard" component={DashboardPage} />
        <Route exact path="/transport/trips" component={TripTracking} />
        <Route exact path="/transport/contracts" component={Contract} />
        <ProtectedRoute exact path="/create-trip" component={CreateTrip} />
        <ProtectedRoute exact path="/bilty" component={Bilty} />
        <ProtectedRoute exact path="/bilty-list" component={BuiltyList} />
        <ProtectedRoute
          exact
          path="/create-challan"
          component={CreateChallan}
        />

        <ProtectedRoute
          exact
          path="/transporter/:id"
          component={TransporterDetails}
        />
        <ProtectedRoute path="/companies" component={Companies} />
        <ProtectedRoute path="/trader-flow-quatation" component={Quatation} />
        <ProtectedRoute path="/negotiation-chat" component={NegotiationChat} />
        <ProtectedRoute path="/agreement" component={Agreement} />
        <ProtectedRoute path="/agreement-secound" component={AgreementSecound} />
        <ProtectedRoute path="/agreement-list" component={AgreementList} />
        <ProtectedRoute path="/my-enquiry" component={MyEnquiry} />
      </Switch>
    </>
  );
}

function ProtectedRoute({ ...props }) {
  const { isLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  if (!isLoggedIn) {
    history.replace("/");
    return <h1>Not authenticated</h1>;
  } else {
    return (
      <div className="frame d-flex">
        <DashboardMenu />
        <div className="mainWrap">
          <DashboardTop />
          <DashboardNotification />
          <Route {...props} />
        </div>
      </div>
    );
  }
}
