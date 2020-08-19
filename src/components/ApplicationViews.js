import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import DashboardView from "./dashboard/DashboardView";
import CalendarDetail from "./calender/CalendarDetail";
import WeatherDetail from "./weather/WeatherDetail";

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
      <Route
        path="/recipe"
        render={(props) => {
          return <WeatherDetail />;
        }}
      />
    </>
  );
};

export default ApplicationViews;
