import React from "react";
import WeatherCard from "./WeatherCard";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <WeatherCard city="New York" temperature={12} condition="clear" />
      <WeatherCard city="London" temperature={9} condition="clouds" />
      <WeatherCard city="Berlin" temperature={5} condition="rain" />
      <WeatherCard city="Moscow" temperature={-2} condition="snow" />
    </div>
  );
};

export default Dashboard;
