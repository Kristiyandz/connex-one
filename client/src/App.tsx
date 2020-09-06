import React, { FC } from 'react';
import { TimeDashboard } from "./components/TimeDashboard";
import { MetricsDashboard } from "./components/MetricsDashboard";
import { useInitialData } from "./hooks/getInitialData";
import "./App.css";

const App: FC = () => {
  const [currentServerTime, apiMetrics, hasError] = useInitialData();
  return (
    <div className="app">
      <TimeDashboard />
      <MetricsDashboard />
    </div>
  );
}

export default App;
