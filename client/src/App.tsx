import React, { FC } from 'react';
import { TimeDashboard } from "./components/TimeDashboard";
import { MetricsDashboard } from "./components/MetricsDashboard";
import { useInitialData } from "./hooks/getInitialData";
import "./App.css";

const App: FC = () => {
  const [currentServerTime, apiMetrics, hasError, isLoading] = useInitialData();
  const { properties: { epoch } } = currentServerTime;
  return (
    <div className="app">
      <TimeDashboard serverTime={epoch.description} isLoading={isLoading} />
      <MetricsDashboard apiMetrics={apiMetrics} isLoading={isLoading}/>
    </div>
  );
}

export default App;
