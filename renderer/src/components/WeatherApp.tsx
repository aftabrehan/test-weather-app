import { useState } from "react";
import { useRouter } from "next/router";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const WeatherApp: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigateHome = () => router.push("/");
  const handleNavigateProfile = () => router.push("/profile");

  return (
    <div className="flex h-screen">
      <Sidebar
        onNavigateHome={handleNavigateHome}
        onNavigateProfile={handleNavigateProfile}
      />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-4">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default WeatherApp;
