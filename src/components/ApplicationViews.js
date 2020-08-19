import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import DashboardView from "./dashboard/DashboardView";
import CalendarDetail from "./calender/CalendarDetail";

const ApplicationViews = () => {
  return (
    <>
      <Route
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        path="/dashboard"
        render={(props) => {
          return <DashboardView />;
        }}
      />
      <Route
        path="/calendar"
        render={(props) => {
          return <CalendarDetail />;
        }}
      />
    </>
  );
};

export default ApplicationViews;
