import React, { FC } from 'react';
import { TimeDashboard } from "./components/TimeDashboard";
import { MetricsDashboard } from "./components/MetricsDashboard";
import { useServerTime, useMetrics } from "./hooks";
import "./App.css";

const App: FC = () => {
  const [currentServerTime, hasSTError, isSTimeLoading] = useServerTime();
  const [apiMetrics, hasMetricsError, isMetricsLoading] = useMetrics();

  const { properties: { epoch } } = currentServerTime;

  return (
    <div className="app">
      <TimeDashboard serverTime={epoch.description} isLoading={isSTimeLoading} hasError={hasSTError} />
      <MetricsDashboard apiMetrics={apiMetrics} isLoading={isMetricsLoading} hasError={hasMetricsError} />
    </div>
  );
}

export default App;
