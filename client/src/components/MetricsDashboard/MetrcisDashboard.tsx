import React, { FC } from "react";
import "./MetricsDashboard.css";

interface MetricsDashboardProps {
    apiMetrics: string | null;
};

export const MetricsDashboard: FC<MetricsDashboardProps> = ({ apiMetrics }) => {
    return (
        <div data-testid="metrics-dashboard" className="metrics-db-container">
            Metrics dashboard
            <pre>
                <code data-testid="metrics-content">{apiMetrics}</code>
            </pre>
        </div>
    );
};