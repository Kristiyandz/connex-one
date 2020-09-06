import React, { FC } from 'react';
import { TimeDashboard } from "./components/TimeDashboard";
import { MetricsDashboard } from "./components/MetricsDashboard";
import { useInitialData } from "./hooks/getInitialData";
import "./App.css";

const App: FC = () => {
  const [currentServerTime, apiMetrics, hasError, isLoading] = useInitialData();
  const { properties: { epoch } } = currentServerTime;
  console.log(epoch.description, 'the description')
  return (
    <div className="app">
      <TimeDashboard serverTime={epoch.description} isLoading={isLoading}/>
      <MetricsDashboard />
    </div>
  );
}

export default App;
