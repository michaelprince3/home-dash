import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import DashboardView from "./dashboard/DashboardView";
import CalendarDetail from "./calender/CalendarDetail";
import RecipeDetail from "./recipe/RecipeDetail";
import ShoppingListDetail from "./shopping/ShoppingListDetail"
import WeatherDetail from "./weather/WeatherDetail"


const ApplicationViews = () => {
  return (
    <>
      <Route
        path="/"
        render={(props) => {
          return <Home {...props}/>;
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
          return <RecipeDetail />;
        }}
      />
      <Route 
      path="/shopping"
      render={(props) => {
        return <ShoppingListDetail />
      }}
      />
      <Route
      path="/weather"
      render={(props) => {
        return <WeatherDetail />
      }}
      />
    </>
  );
};

export default ApplicationViews;
