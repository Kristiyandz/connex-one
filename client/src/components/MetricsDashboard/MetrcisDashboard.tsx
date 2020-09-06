import React, { FC } from "react";
import { LoadingMessage } from "../LoadingMessage"
import "./MetricsDashboard.css";

interface MetricsDashboardProps {
    apiMetrics: string | null;
    isLoading: boolean;
};

export const MetricsDashboard: FC<MetricsDashboardProps> = ({ apiMetrics, isLoading }) => {
    if (isLoading) return <LoadingMessage />
    return (
        <div data-testid="metrics-dashboard" className="metrics-db-container">
            Metrics dashboard
            <pre>
                <code data-testid="metrics-content">{apiMetrics}</code>
            </pre>
        </div>
    );
};