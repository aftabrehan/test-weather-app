import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

interface WeatherCardProps {
  city: string;
  temperature: number;
  condition: "clear" | "clouds" | "rain" | "snow";
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temperature,
  condition,
}) => {
  let icon = faSun;
  switch (condition) {
    case "clear":
      icon = faSun;
      break;
    case "clouds":
      icon = faCloud;
      break;
    case "rain":
      icon = faCloudRain;
      break;
    case "snow":
      icon = faSnowflake;
      break;
    default:
      break;
  }

  return (
    <div className="p-6 bg-gray-200 rounded-lg">
      <div className="flex justify-between">
        <h2 className="font-bold">{city}</h2>
        <h2 className="font-bold text-3xl">{temperature}°</h2>
      </div>
      <div className="flex justify-between">
        <FontAwesomeIcon icon={icon} size="2x" className="mt-4" />
        <p className="mt-4">{condition}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
